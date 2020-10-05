class Player {
    constructor(gameContainer) {
            this.gameContainer = gameContainer;
        }
        /*
         Vream sa apara un div care va fi player in gameContainer
         Pentru inceput, il punem intr-un colt din container
         Div va avea pozitie absoluta si va jucati cu x si y
        */
    createHtml(x, y) {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player");
            playerDiv.style.position = "absolute"
            playerDiv.style.top = x + "px";
            playerDiv.style.left = y + "px";

            this.gameContainer.appendChild(playerDiv);
        }
        // eventul il inregistram pe window/document
        // verificare de keydown - folositi switch/ if else


    registerMoving() {

        // window.addEventListener("keydown", (e) => {
        //     if (e.key === "keydown") {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })
        window.addEventListener("keydown", (e) => {

            switch (e.key) {

                case "ArrowUp":
                    console.log("move up")
                    break
                case "ArrowDown":
                    console.log("move down");
                    break
                case "ArrowLeft":
                    console.log("move left")
                    break
                case "ArrowRight":
                    console.log("move right")
                    break
            }
            this.checkIfPlayerIsOutsideOfContainer()
            this.movePlayerHtml(e.key)
            this.checkIfPlayerIsOutsideOfContainer();
        })

    }

    movePlayerHtml(key) {
            let modifier = 20;
            let stylePlayer = this.gameContainer.children[0].style;
            if (key === "ArrowUp") {
                stylePlayer.top = `${parseInt(stylePlayer.top)-modifier}px`;

            }
            if (key === "ArrowDown") {
                stylePlayer.top = `${parseInt(stylePlayer.top)+modifier}px`;
            }
            if (key === "ArrowLeft") {
                stylePlayer.left = `${parseInt(stylePlayer.left)-modifier}px`;
            }
            if (key === "ArrowRight") {
                stylePlayer.left = `${parseInt(stylePlayer.left)+modifier}px`;
            }
        }
        // returneaza true sau false
    checkIfPlayerIsOutsideOfContainer() {
        let playerDom = this.gameContainer.children[0];
        if (parseInt(playerDom.style.left) >= 0 && parseInt(playerDom.style.left) <= 400 && parseInt(playerDom.style.top) >= 0 && parseInt(playerDom.style.top) <= 400) {
            console.log(true + " player is in")
        } else {
            console.log(false + " player is out")
        }
    }


    playerIsOutsideOfContainer() {
        let playerDom = this.gameContainer.children[0];

    }

}
const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player(gameContainer)

player1.createHtml(0, 0);
player1.registerMoving();
player1.movePlayerHtml();