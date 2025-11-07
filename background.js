"use strict";

const script = {
    id: "yt-153-fixer-page-script",
    js: ["page.js"],
    matches: ["<all_urls>"]
}

browser.scripting.registerContentScripts([script]);
