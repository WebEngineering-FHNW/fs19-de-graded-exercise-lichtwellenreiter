const mapCanvasLayer2 = document.getElementById("mapLayer2");
const layer2 = mapCanvasLayer2.getContext("2d");


mapCanvasLayer2.width = cw;
mapCanvasLayer2.height = ch;


let startNode = getNodeForName("start");
let character = new Character(getXCoord(startNode.x), getYCoord(startNode.y) - 3, 40);


function Character(x, y, step) {
    this.x = x;
    this.y = y;
    this.step = step;

    this.characterImage = new Image();
    this.characterImage.src = "/assets/dnc/characters/ogre.png";

    this.update = function () {
        // console.log(this.x + " " + this.y);
        layer2.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
    }
}



// Animation Loop
function animate() {
    layer2.clearRect(0, 0, mapCanvasLayer2.width, mapCanvasLayer2.height)
    requestAnimationFrame(animate)
    character.update()
}


animate();