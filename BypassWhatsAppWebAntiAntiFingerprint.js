// ==UserScript==
// @namespace    Violentmonkey Scripts
// @name         Bypass WhatsApp Web Anti AntiFingerprint
// @author       antipatico (github.com/antipatico)
// @version      0.1-beta
// @description  Use WhatsApp Web with AntiFingerprint enabled!
// @homepageURL  https://github.com/antipatico/bypass-whatsapp-web-anti-antifingerprint
// @updateURL    https://raw.githubusercontent.com/antipatico/bypass-whatsapp-web-anti-antifingerprint/master/BypassWhatsAppWebAntiAntiFingerprint.js
// @downloadURL  https://raw.githubusercontent.com/antipatico/bypass-whatsapp-web-anti-antifingerprint/master/BypassWhatsAppWebAntiAntiFingerprint.js
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

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
    }
    
    let whatsappLogo = document.querySelector(".web div div div div div div div div span");
    if (whatsappLogo != null) {
      whatsappLogo.style["display"] = "none"
    }
    await sleep(500);
  }
}

hook();
