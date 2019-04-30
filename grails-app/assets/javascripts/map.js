//grid width and height
let bw = 2680;
let bh = 1600;
//padding around grid
let p = 0;

//size of canvas
let cw = bw + p + 1;
let ch = bh + p + 1;

// size of one tile
let tileW = 40;
let tileH = 40;

let tiles = [
    "floor_1",
    "floor_2",
    "floor_3",
    "floor_4",
    "floor_5",
    "floor_6",
    "floor_7",
    "floor_8",
];


let showGrid = 0;
let hover = false, id;

let mapCanvas = document.getElementById("map");
let mapContainer = document.getElementById("mapContainer");

mapCanvas.width = cw;
mapCanvas.height = ch;

//mapContainer.scrollTo(map.width / 2, map.height / 2);

mapContainer.scrollTo(mapContainer.left + mapContainer.width / 2, mapContainer.top + mapContainer.height / 2);


let context = mapCanvas.getContext("2d");


let nodes = [
    {
        "name": "node0",
        "x": 18,
        "y": 10,
        "edge": []
    },
    {
        "name": "node1",
        "x": 20,
        "y": 9,
        "edge": ["node2", "node3"]
    },
    {
        "name": "node2",
        "x": 15,
        "y": 11,
        "edge": []
    },
    {
        "name": "node3",
        "x": 18,
        "y": 15,
        "edge": ["node1"]
    },
    {
        "name": "node4",
        "x": 25,
        "y": 5,
        "edge": ["node1"]
    }
];

let backgroundTiles = [];
let character;


function Character(x, y, step) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.velocity = 0.05;
    this.oldpos = {x: x, y: y};
    this.image = new Image();
    this.image.src = "/assets/dnc/characters/ogre.png";

    this.bgimg = new Image();


    this.update = function () {


        let oldTile = findTileForPosition(this.oldpos.x / tileW, this.oldpos.y / tileH);

        console.log(oldTile);

        this.bgimg.src = "/assets/dnc/floor/floor_" + oldTile[0].tile + ".png";

        console.log(this.bgimg.src);

        context.drawImage(this.bgimg, this.oldpos.x, this.oldpos.y, tileW, tileW);

        context.drawImage(this.image, this.x, this.y, tileW, tileW);
    }
}


getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
};


/**
 * Draw a visible grid, if showGrid is enabled
 */
function drawGrid() {

    if (1 === showGrid) {

        for (let x = 0; x <= bw; x += tileW) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }


        for (let x = 0; x <= bh; x += tileH) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
    }

    document.getElementById("numTiles").innerText = ((bw / tileW) * (bh / tileH)).toString();
}


function drawCharacter() {

    let xCenter = findX(parseInt(((bw / tileW) / 2).toString()));
    let yCenter = findY(parseInt(((bh / tileH) / 2).toString()));

    console.log(typeof xCenter);

    character = new Character(xCenter, yCenter, 40);
    character.update();
}


/**
 * Draw Floor Tiles
 */
function drawBackground() {

    let columns = bw / tileW;
    let rows = bh / tileH;


    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let image = new Image();
            let randTile = Math.floor(Math.random() * 8 + 1);
            image.src = "/assets/dnc/floor/floor_" + randTile + ".png";
            context.drawImage(image, findX(i), findY(j), tileW, tileH);

            let bgTile = {
                "x": i,
                "y": j,
                "tile": randTile
            };

            backgroundTiles.push(bgTile);

        }
    }

    console.log(backgroundTiles);
}


function findTileForPosition(x, y) {

    return backgroundTiles.filter(n => {
        if (n.x === x && n.y === y) {
            return n.tile;
        }
    });

}

/**
 * Draw a node
 * @param item
 * @param index
 */
function drawNode(item, index) {
    let x = findX(item.x)
    let y = findY(item.y)

    let image = new Image();
    image.src = "/assets/dnc/node/wall_banner_yellow.png";
    context.drawImage(image, x, y, tileW, tileH);
}

/**
 * Calculate X Coord
 * @param x
 * @returns {number}
 */
function findX(x) {
    return x * tileW
}

/**
 * Calculate Y Coord
 * @param y
 * @returns {number}
 */
function findY(y) {
    return y * tileH
}

/**
 * Draw Edge between two Nodes
 * @param n1
 * @param n2
 */
function drawEdgeBetweenNodes(n1, n2) {

    context.moveTo(findX(n1.x) + (0.5 * tileW), findY(n1.y) + (tileH));
    context.lineTo(findX(n1.x) + (0.5 * tileW), findY(n2.y) + (0.5 * tileH));
    context.lineTo(findX(n2.x) + (0.5 * tileW), findY(n2.y) + (0.5 * tileH));

    context.strokeStyle = "black";
    context.stroke();
}

/**
 * Draw all Edges
 * @param node
 * @param index
 */
function drawEdges(node, index) {

    const centerW = 0.5 * tileW;
    const centerH = 0.5 * tileH;

    if (undefined != node.edge && node.edge.length > 0) {

        for (i = 0; i < node.edge.length; i++) {

            let nnode = getNodeForName(node.edge[i]);

            context.moveTo(node.x + centerW, node.y + centerH);
            context.lineTo(node.x + centerW, nnode.y + centerH);
            context.lineTo(nnode.x + centerW, nnode.y + centerH);

            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.stroke();
            context.lineWidth = 1;
        }
    }
}

/**
 * Get a Node Object from a Nodename
 * @param name
 * @returns {*[]}
 */
function getNodeForName(name) {
    return nodes.filter(n => {
        if (n.name === name) {
            return n;
        }
    });
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    character.update()
}

/**
 * Initialize Map
 */

drawGrid();
drawBackground();
drawCharacter();


nodes.forEach(drawNode);
//nodes.forEach(drawEdges)


drawEdgeBetweenNodes(nodes[0], nodes[1]);
drawEdgeBetweenNodes(nodes[1], nodes[2]);
drawEdgeBetweenNodes(nodes[1], nodes[3]);
drawEdgeBetweenNodes(nodes[1], nodes[4]);

animate();