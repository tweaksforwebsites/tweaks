/// grammarly.js
setInterval(() => {
    try {
            for (let premiums of document.querySelector("grammarly-popups").shadowRoot.querySelectorAll("button.sticker")) {
                premiums.style.display = "none";
            }
        } catch {
            1+1
        }
}, 1000)
