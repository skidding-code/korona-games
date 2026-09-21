/*
 * Korona asset mirror runtime.
 *
 * Every game page installs its base element before this file loads.  This
 * runtime keeps that base pointed at the selected mirror and retries explicit
 * fetch() requests for files in this repository on the remaining mirrors.
 */
(function () {
    "use strict";

    var config = window.__koronaCdnConfig;
    if (!config || !Array.isArray(config.roots) || !config.roots.length) {
        return;
    }

    var roots = config.roots.map(function (root) {
        return root.replace(/\/?$/, "/");
    });
    var base = document.querySelector("base[data-korona-base]");
    var active = Math.min(Math.max(Number(config.active) || 0, 0), roots.length - 1);
    var nativeFetch = window.fetch && window.fetch.bind(window);

    function setActive(index) {
        active = index;
        config.active = index;
        if (base) {
            base.href = roots[index] + config.pagePath;
        }
    }

    function repoPath(value) {
        var href;
        try {
            href = new URL(value instanceof Request ? value.url : value, document.baseURI).href;
        } catch (_) {
            return null;
        }

        for (var i = 0; i < roots.length; i += 1) {
            if (href.indexOf(roots[i]) === 0) {
                return href.slice(roots[i].length);
            }
        }

        // Also handles legacy absolute jsDelivr links that used a commit SHA.
        var match = href.match(/\/gh\/skidding-code\/korona-games(?:@|\/)[^/]+\/(.+)$/);
        return match ? match[1] : null;
    }

    function mirrorUrl(value, index) {
        var path = repoPath(value);
        return path === null ? null : roots[index] + path;
    }

    window.__koronaCdnUrl = function (value) {
        return mirrorUrl(value, active) || value;
    };
    window.__koronaCdnMirrors = roots.slice();

    if (nativeFetch) {
        window.fetch = function (input, init) {
            var path = repoPath(input);
            if (path === null) {
                return nativeFetch(input, init);
            }

            var lastError;
            var start = active;
            var attempt = function (index) {
                var url = roots[index] + path;
                var request = input instanceof Request ? new Request(url, input) : url;

                return nativeFetch(request, init).then(function (response) {
                    // A 4xx means the file is genuinely absent; trying another
                    // mirror cannot fix that. Retry transient/CDN failures only.
                    if (response.ok || response.status < 500 || index === roots.length - 1) {
                        if (response.ok) {
                            setActive(index);
                        }
                        return response;
                    }
                    return attempt(index + 1);
                }).catch(function (error) {
                    lastError = error;
                    return index === roots.length - 1 ? Promise.reject(lastError) : attempt(index + 1);
                });
            };

            return attempt(start);
        };
    }

    // Covers dynamically created images, stylesheets, scripts, media, and
    // frames. The initial parser-blocking runtime selection handles normal
    // markup; this is a later safety net if a mirror goes down mid-session.
    window.addEventListener("error", function (event) {
        var element = event.target;
        if (!element || element === window || !element.tagName) {
            return;
        }

        var attribute = element.hasAttribute("src") ? "src" : element.hasAttribute("href") ? "href" : null;
        if (!attribute) {
            return;
        }

        var path = repoPath(element.getAttribute(attribute));
        if (path === null) {
            return;
        }

        var current = roots.findIndex(function (root) {
            return element[attribute] && element[attribute].indexOf(root) === 0;
        });
        // A legacy hard-coded jsDelivr URL can have an older commit SHA, so
        // it will not equal roots[0]. It is still the primary mirror.
        if (current === -1 && /(^|[/.])cdn\.jsdelivr\.net\//.test(element[attribute])) {
            current = 0;
        }
        var next = current === -1 ? active : current + 1;
        if (next >= roots.length) {
            return;
        }

        setActive(next);
        if (element.tagName === "SCRIPT") {
            var replacement = element.cloneNode(true);
            replacement.setAttribute("src", roots[next] + path);
            element.replaceWith(replacement);
        } else {
            element.setAttribute(attribute, roots[next] + path);
        }
    }, true);

    setActive(active);
}());
