const mapCanvasLayer2 = document.getElementById("mapLayer2");
const layer2 = mapCanvasLayer2.getContext("2d");


mapCanvasLayer2.width = cw;
mapCanvasLayer2.height = ch;


let startNode = getNodeForName("start");
let character = new Character(getXCoord(startNode.x), getYCoord(startNode.y) - 3, 40);

let characterAssets = "/assets/dnc/characters";
let characterSteps = "/ogre";
let lastStep = "f0";

function Character(x, y, step) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.run = false;

    this.characterImage = new Image();
    this.characterImage.src = "/assets/dnc/characters/ogre.png";

    this.update = function () {
        // console.log(this.x + " " + this.y);

        console.log("Character run: " + this.run);

        if (this.run) {
            characterRun();
        } else {
            layer2.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
        }

    }
}


function characterRun() {

    for (let i = 0; i < 4; i++) {
        character.characterImage.src = characterAssets + characterSteps + "/" + "f" + i + ".png";
        layer2.drawImage(character.characterImage, this.x, this.y, tileW, tileW);
    }
}


// Animation Loop
function animate() {
    layer2.clearRect(0, 0, mapCanvasLayer2.width, mapCanvasLayer2.height)
    requestAnimationFrame(animate)
    character.update()
}


animate();