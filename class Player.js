class Player {
    constructor(name, gameContainer) {
        this.gameContainer = gameContainer;
        this.name = name;
    }

    /*
     Vream sa apara un div care va fi player in gameContainer
     Pentru inceput, il punem intr-un colt din container
     Div va avea pozitie absoluta si va jucati cu x si y
    */
    createHtml(x, y) {
        console.log("helo", this.name);
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.style.position = "absolute"
        playerDiv.style.top = x + "px";
        playerDiv.style.left = y + "px";

        this.gameContainer.appendChild(playerDiv);

    }


    // eventul il inregistram pe window/document
    // verificare de keydown - folositi switch/ if else
    // registerMoving() {}

    movePlayerHtml() {
        let modifier = 10;


        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    registerMoving("top") {

                    }
                    break
                case "ArrowDown":
                    registerMoving("down")
                    break
                case "ArrowLeft":
                    registerMoving("left")
                    break
                case "ArrowRight":
                    registerMoving("right");
                    break
            }
        });
    }
    registerMoving(position) {
            if (position === "top") {
                document.getElementsByClassName("player").style.top =
            }
        }
        // returneaza true sau false
    checkIfPlayerIsOutsideOfContainer() {

    }

}

const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player("alex", gameContainer)
const player2 = new Player("norbu", gameContainer)
    //let player=document.querySelector(".player")
    //createHtml.Player()
    //movePlayerHtml.Player()
player1.createHtml(25, 65);
player2.createHtml(10, 10);
player1.movePlayerHtml();


//Varianta 2:
class Player {
    constructor(name, gameContainer, position) {
        this.gameContainer = gameContainer;
        this.name = name;
        this.position = position;
    }

    /*
     Vream sa apara un div care va fi player in gameContainer
     Pentru inceput, il punem intr-un colt din container
     Div va avea pozitie absoluta si va jucati cu x si y
    */
    createHtml(x, y) {
        console.log("helo", this.name);
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.style.position = "absolute"
        playerDiv.style.top = x + "px";
        playerDiv.style.left = y + "px";

        this.gameContainer.appendChild(playerDiv);

    }


    // eventul il inregistram pe window/document
    // verificare de keydown - folositi switch/ if else
    // registerMoving() {}


    registerMoving(position) {
        console.log("move", this.position)
        let modifier = 10;
        if (position === "top") {
            document.getElementsByClassName("player").style.top = `${parseInt(style.top)-modifier}px`;
        } else if (position === "down") {
            document.getElementsByClassName("player").style.top = `${parseInt(style.top)+modifier}px`;
        }
        if (position === "left") {
            document.getElementsByClassName("player").style.left = `${parseInt(style.left)-modifier}px`;
        } else if (position === "right") {
            document.getElementsByClassName("player").style.left = `${parseInt(style.left)+modifier}px`;
        }
    }

    movePlayerHtml() {


        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    registerMoving("top");
                    console.log("move up")
                    break
                case "ArrowDown":
                    registerMoving("down");
                    break
                case "ArrowLeft":
                    registerMoving("left")
                    break
                case "ArrowRight":
                    registerMoving("right")
                    break
            };

        })

    }

    // returneaza true sau false
    //checkIfPlayerIsOutsideOfContainer()
}


const gameContainer = document.querySelector('#gameContainer');
const player1 = new Player("alex", gameContainer)
const player2 = new Player("norbu", gameContainer)
    //let player=document.querySelector(".player")
    //createHtml.Player()
    //movePlayerHtml.Player()
player1.createHtml(25, 65);
player2.createHtml(10, 10);
player1.registerMoving(position);
player1.movePlayerHtml();