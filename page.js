"use strict";

const youtubeEmbedUrls = [
    "https://www.youtube.com/embed",
    "https://youtube.com/embed",
];

function tryFixIFrame(iframe) {
    const isYoutubeIFrame = youtubeEmbedUrls.some(x => iframe.src.startsWith(x));

    if(isYoutubeIFrame) {
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.src = iframe.src.replace("youtube.com", "youtube-nocookie.com");
        console.log("YouTube 153 Fixer: Fixed YouTube iframe")
    }
}

document.querySelectorAll("iframe").forEach(tryFixIFrame);

const iframes = new MutationObserver(() => {
    document.querySelectorAll("iframe").forEach(tryFixIFrame);
});

iframes.observe(document, {subtree: true, childList: true});

