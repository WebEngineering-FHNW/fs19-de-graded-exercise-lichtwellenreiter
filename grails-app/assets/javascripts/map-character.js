export function Character(x, y, step, layer) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.run = false;
    this.layer = layer;
}

Character.prototype.draw = function () {

    if (this.run) {
        this.characterImage.src = "/assets/dnc/characters/ogre-walking.gif";
        this.layer.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
    } else {
        this.characterImage.src = "/assets/dnc/characters/ogre.png";
        this.layer.drawImage(this.characterImage, this.x, this.y, tileW, tileW);
    }

};

Character.prototype.animate = function () {
    this.layer.clearRect(0, 0, mapCanvasLayer2.width, mapCanvasLayer2.height);
    requestAnimationFrame(animate);
    this.draw()
};