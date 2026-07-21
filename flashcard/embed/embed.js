"use strict";

import * as BareMux from "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux@2.1.8/dist/index.mjs";

const WISP_URL = `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/wisp/`;

let workerText = await fetch("https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux@2.1.8/dist/worker.js").then(r => r.text());
workerText = workerText.replace(
    "s.request(new URL(a.fetch.remote),a.fetch.method,a.fetch.body,a.fetch.headers,null)",
    "s.request(new URL(a.fetch.remote),a.fetch.method,a.fetch.body,a.fetch.headers&&!(a.fetch.headers instanceof Headers)?new Headers(Object.entries(a.fetch.headers)):a.fetch.headers,null)"
);
const workerBlob = new Blob([workerText], { type: "application/javascript" });
const workerUrl = URL.createObjectURL(workerBlob);
const connection = new BareMux.BareMuxConnection(workerUrl);

const { ScramjetController } = $scramjetLoadController();
const scramjet = new ScramjetController({
    files: {
        wasm: "/tinyhomework/wasm.wasm",
        all:  "/tinyhomework/all.js",
        sync: "/tinyhomework/sync.js",
    },
});

try {
    scramjet.init();
    navigator.serviceWorker.register("/sw.js");
} catch (e) { console.error("scramjet init failed:", e); }

await connection.setTransport(
    "https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport@2.1.28/dist/index.mjs",
    [{ wisp: WISP_URL }]
);

const raw = location.hash.slice(1);
if (!raw) throw new Error("No URL in hash");

let destination = "";
try {
    destination = new URL(raw).toString();
} catch {
    try {
        destination = new URL("https://" + raw).toString();
    } catch (err) {
        throw err;
    }
}

function lowtaperfade() {
    document.getElementById('fadeout').style.opacity = "0";
}

function highslipperybuzz() {
    document.getElementById('fadeout').style.opacity = "1";
    document.getElementById('theh1').innerText = "this is taking a while...";
    document.getElementById('thep').innerText = "the server might be overloaded, or the requested site is slow right now.";
}

async function go() {
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

    setTimeout(() => lowtaperfade(), 1500);
    setTimeout(() => {
        if (isFirefox) {
            window.top.location.href = scramjet.encodeUrl(destination);
            return;
        }
        const frame = scramjet.createFrame();
        frame.frame.id = "sj-frame";
        document.body.appendChild(frame.frame);
        frame.go(destination);
    }, 1700);

    setTimeout(() => highslipperybuzz(), 7000);
}

go();