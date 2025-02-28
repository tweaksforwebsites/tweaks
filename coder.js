/// coder.js
function visit(web) {
                var game = window.open(
                    "",
                    "Math",
                    "width=" + screen.width + ",height=" + screen.height + ",resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no,top=0,left=0,popup=false"
                );
                // fetch html for game and display it in the new window
                fetch(web)
                    .then((response) => response.text())
                    .then((html) => {
                        game.document.write(html);
                        game.document.title = "debug space";
                        game.document.close();
                    });
}
if (window.location.href === 'https://wikihow.com') {
            visit('https://raw.githubusercontent.com/fakeperson12312/astra-wasm/refs/heads/main/EaglercraftX_1.8_WASM-GC_Offline_Download.html')
}
