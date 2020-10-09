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
            let playerDom = this.gameContainer.children[0];
            let x = parseInt(playerDom.style.left);
            let y = parseInt(playerDom.style.top);
            let modifier = 20;
            switch (e.key) {

                case "ArrowUp":
                    console.log("move up")
                    y = y - modifier;
                    break
                case "ArrowDown":
                    console.log("move down");
                    y = y + modifier;
                    break
                case "ArrowLeft":
                    console.log("move left")
                    x = x - modifier;
                    break
                case "ArrowRight":
                    console.log("move right")
                    x = x + modifier;
                    break
            }

            if (this.checkIfPlayerIsOutsideOfContainer(x, y) === true) {
                this.movePlayerHtml(e.key)
            }
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
        // checkIfPlayerIsOutsideOfContainer() {
        //     let playerDom = this.gameContainer.children[0];
        //     if (parseInt(playerDom.style.left) >= 0 && parseInt(playerDom.style.left) <= 400 && parseInt(playerDom.style.top) >= 0 && parseInt(playerDom.style.top) <= 400) {
        //         console.log(true + " player is in")
        //     } else {
        //         console.log(false + " player is out")
        //     }
        // }

    checkIfPlayerIsOutsideOfContainer(x, y) {
        // if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
        //     return true;
        // } else {
        //     return false;
        // }

        return x >= 0 && x <= 400 && y >= 0 && y <= 400

    }

}
const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player(gameContainer)

player1.createHtml(0, 0);
player1.registerMoving();
player1.movePlayerHtml();