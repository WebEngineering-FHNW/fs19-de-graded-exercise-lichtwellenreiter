function Listener(char, node) {

    const helpModal = document.getElementById('helpModal');
    const nodeModal = document.getElementById('nodeModal');
    this.nodes = node;
    this.character = char;
    this.help = document.getElementById("helpButton");
    this.mapCanvasLayer = document.getElementById("mapLayer1");
    this.mapContainer = document.getElementById("mapContainer");

    //console.log(char);
}
