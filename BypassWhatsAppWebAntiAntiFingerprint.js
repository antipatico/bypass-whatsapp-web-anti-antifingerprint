// ==UserScript==
// @namespace    Violentmonkey Scripts
// @name         Bypass WhatsApp Web Anti AntiFingerprint
// @author       antipatico (github.com/antipatico)
// @version      0.2-beta
// @description  Use WhatsApp Web with AntiFingerprint enabled!
// @homepageURL  https://github.com/antipatico/bypass-whatsapp-web-anti-antifingerprint
// @updateURL    https://raw.githubusercontent.com/antipatico/bypass-whatsapp-web-anti-antifingerprint/master/BypassWhatsAppWebAntiAntiFingerprint.js
// @downloadURL  https://raw.githubusercontent.com/antipatico/bypass-whatsapp-web-anti-antifingerprint/master/BypassWhatsAppWebAntiAntiFingerprint.js
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

(function() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function hook() {
    while(true) {
      if (document.querySelector("div[title='Menu']") != null) {
        console.log("[W-UNLOCKER] My work is done here, cya!")
        break;
      }

      let canvas = document.querySelector("canvas");
      if (canvas != null && canvas.style["display"] != null) {
        canvas.style["display"] = null;
        canvas.style["z-index"] = 1337;
        canvas.style["width"] = "1000%";
      }

      await sleep(500);
    }
  }

  hook();
}());

