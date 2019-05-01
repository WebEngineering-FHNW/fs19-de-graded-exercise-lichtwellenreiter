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


let showGrid = 0;
let hover = false, id;

let mapCanvasLayer1 = document.getElementById("mapLayer1");
let mapContainer = document.getElementById("mapContainer");

mapCanvasLayer1.width = cw;
mapCanvasLayer1.height = ch;

//mapContainer.scrollTo(map.width / 2, map.height / 2);

mapContainer.scrollTo(mapContainer.left + mapContainer.width / 2, mapContainer.top + mapContainer.height / 2);


let layer1 = mapCanvasLayer1.getContext("2d");


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
            layer1.moveTo(0.5 + x + p, p);
            layer1.lineTo(0.5 + x + p, bh + p);
        }


        for (let x = 0; x <= bh; x += tileH) {
            layer1.moveTo(p, 0.5 + x + p);
            layer1.lineTo(bw + p, 0.5 + x + p);
        }

        layer1.lineWidth = 1;
        layer1.strokeStyle = "black";
        layer1.stroke();
    }

    document.getElementById("numTiles").innerText = ((bw / tileW) * (bh / tileH)).toString();
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
            layer1.drawImage(image, getXCoord(i), getYCoord(j), tileW, tileH);

            let bgTile = {
                "x": i,
                "y": j,
                "tile": randTile
            };

            backgroundTiles.push(bgTile);

        }
    }

    //console.log(backgroundTiles);
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
    let x = getXCoord(item.x)
    let y = getYCoord(item.y)

    let image = new Image();
    image.src = "/assets/dnc/node/wall_banner_yellow.png";
    layer1.drawImage(image, x, y, tileW, tileH);
}



/**
 * Draw Edge between two Nodes
 * @param n1
 * @param n2
 */
function drawEdgeBetweenNodes(n1, n2) {

    layer1.moveTo(getXCoord(n1.x) + (0.5 * tileW), getYCoord(n1.y) + (tileH));
    layer1.lineTo(getXCoord(n1.x) + (0.5 * tileW), getYCoord(n2.y) + (0.5 * tileH));
    layer1.lineTo(getXCoord(n2.x) + (0.5 * tileW), getYCoord(n2.y) + (0.5 * tileH));

    layer1.strokeStyle = "black";
    layer1.stroke();
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

            layer1.moveTo(node.x + centerW, node.y + centerH);
            layer1.lineTo(node.x + centerW, nnode.y + centerH);
            layer1.lineTo(nnode.x + centerW, nnode.y + centerH);

            layer1.strokeStyle = "black";
            layer1.lineWidth = 2;
            layer1.stroke();
            layer1.lineWidth = 1;
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


/**
 * Initialize Map
 */

drawGrid();
drawBackground();


nodes.forEach(drawNode);
//nodes.forEach(drawEdges)


drawEdgeBetweenNodes(nodes[0], nodes[1]);
drawEdgeBetweenNodes(nodes[1], nodes[2]);
drawEdgeBetweenNodes(nodes[1], nodes[3]);
drawEdgeBetweenNodes(nodes[1], nodes[4]);

