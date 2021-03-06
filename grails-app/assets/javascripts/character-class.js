function Character(charstep, charlayer, help) {
    this.x = 0;
    this.y = 0;
    this.step = charstep;
    this.layer = charlayer;
    this.run = false;
    this.characterImage = new Image();
    this.helper = help;
}

/**
 * Set the Start position of the Character based on the start node
 * @param startNode
 */
Character.prototype.setStartNode = function(startNode){
    this.x = this.helper.getXCoord(startNode.x);
    this.y = this.helper.getYCoord(startNode.y);
};

/**
 * Check if the Character is running
 * @returns {boolean}
 */
Character.prototype.isRunning = function () {
    return this.run;
};

/**
 * Character Update function
 */
Character.prototype.draw = function () {

    let canvas = document.getElementById("mapLayer2");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,2400, 2400);

    this.layer.clearRect(0,0, this.layer.width, this.layer.height);

    if (this.isRunning()) {
        this.characterImage.src = "/assets/dnc/characters/ogre-walking.gif";
        this.layer.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
    } else {
        this.characterImage.src = "/assets/dnc/characters/ogre.png";
        this.layer.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
    }
};