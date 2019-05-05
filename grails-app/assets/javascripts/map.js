//grid width and height
let bw = window.innerWidth;
let bh = window.innerHeight;
//padding around grid
let p = 0;


//size of canvas
let cw = bw + p + 1;
let ch = bh + p + 1;

// size of one tile
let tileW = 40;
let tileH = 40;


console.log(Math.round(bw / tileW) + " " + Math.round(bh / tileH));

let showGrid = 0;
let hover = false, id;

let mapCanvasLayer1 = document.getElementById("mapLayer1");
let mapContainer = document.getElementById("mapContainer");

mapCanvasLayer1.width = cw;
mapCanvasLayer1.height = ch;

mapContainer.scrollTo(mapContainer.left + mapContainer.width / 2, mapContainer.top + mapContainer.height / 2);

let layer1 = mapCanvasLayer1.getContext("2d");
let pathCoords = [];

let nodes = [
    {
        "name": "start",
        "abbr": "start",
        "namelong": "start",
        "description": "-",
        "x": 16,
        "y": 5,
        "edge": ["node0"]
    },
    {
        "name": "node0",
        "abbr": "node0",
        "namelong": "Objectoriented Programming 1",
        "description": "<p>In this course, students learn a typical object-oriented programming language, its options and potential.</p>" +
            "<p>Course content:</p>" +
            "<ul>" +
            "<li>Repetitive procedural programming (primitive data types, control structures, functions and parameter transfer, reference types, multi-dimensional arrays)</li>" +
            "<li>Classes and objects (constructors, initialization blocks, methods, attributes, method overloading, lists, encapsulation, copying and comparing), wrapper classes, strings and packages</li>" +
            "<li>Object oriented prototype, introduction to UML</li>" +
            "<li>Inheritance, polymorphy, final elements, access rights</li>" +
            "<li>Abstract classes and interfaces</li>" +
            "<li>Static inner classes and element classes</li>" +
            "<li>Exception handling</li>" +
            "</ul>",
        "x": 18,
        "y": 5,
        "edge": ["node1"]
    },
    {
        "name": "node1",
        "abbr": "node1",
        "namelong": "-",
        "description": "-",
        "x": 20,
        "y": 9,
        "edge": ["node2", "node3"]
    },
    {
        "name": "node2",
        "abbr": "node2",
        "namelong": "-",
        "description": "-",
        "x": 15,
        "y": 11,
        "edge": []
    },
    {
        "name": "node3",
        "abbr": "node3",
        "namelong": "-",
        "description": "-",
        "x": 18,
        "y": 15,
        "edge": ["node1"]
    },
    {
        "name": "node4",
        "abbr": "node4",
        "namelong": "-",
        "description": "-",
        "x": 25,
        "y": 5,
        "edge": ["node1"]
    }
];


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
            let randTile = Math.floor(Math.random() * 5 + 1);
            image.src = "/assets/dnc/floor/floor_" + randTile + ".png";
            layer1.drawImage(image, getXCoord(i), getYCoord(j), tileW, tileH);
        }
    }
}

/**
 * Draw a node
 * @param item
 * @param index
 */
function drawNode(item, index) {
    let x = getXCoord(item.x);
    let y = getYCoord(item.y);

    let image = new Image();
    image.src = "/assets/dnc/node/node.png";
    layer1.drawImage(image, x, y, tileW, tileH);
}


/**
 * Draw Edge between two Nodes
 * @param n1
 * @param n2
 */
function drawEdgeBetweenNodes(n1, n2) {

    layer1.moveTo(getXCoord(n1.x) + (0.5 * tileW), getYCoord(n1.y) + (0.5 * tileH));
    layer1.lineTo(getXCoord(n1.x) + (0.5 * tileW), getYCoord(n2.y) + (0.5 * tileH));
    layer1.lineTo(getXCoord(n2.x) + (0.5 * tileW), getYCoord(n2.y) + (0.5 * tileH));

    layer1.strokeStyle = "#d6ac2a";
    layer1.lineWidth = 10;
    layer1.stroke();
}

function getPathCoordinates(n1, n2) {

    //FirstNode to corner
    let startX = n1.x;
    let startY = n1.y;

    let cornerX = n1.x;
    let cornerY = n2.y;

    let endX = n2.x -1;
    let endY = n2.y -1;

    if (startY < cornerY) {

        while (startY != cornerY) {
            pathCoords.push({"x": startX, "y": startY});
            startY++;
        }
    } else {
        // CornerY < StartY
        while (cornerY != startY) {
            pathCoords.push({"x": startX, "y": cornerY});
            cornerY++;
            //console.log(cornerY);
        }
    }

    if (endX < cornerX) {

        while (endX != cornerX) {
            pathCoords.push({"x": endX, "y": endY});
            endX++;
            //console.log(endX);
        }
    } else {
        // CornerX < StartX
        while (cornerX != endX) {
            pathCoords.push({"x": endX, "y": cornerY});
            cornerX++;
            //console.log(cornerX);
        }
    }

    //console.log(pathCoords);
}


console.log(pathCoords);


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
    return nodes.find(node => node.name === name);
}


let pathTiles;

function setPathTiles() {

    pathTiles = [];

    nodes.forEach((item, index) => {

        //console.log(item);
    });
}


function drawNodesAndPath() {


}

function getPathBewteenNodes() {

}


/**
 * Initialize Map
 */

drawGrid();
drawBackground();


//Todo implement this instead of each node under this...
//nodes.forEach(drawEdges)

//Todo remove this with upper line ...
drawEdgeBetweenNodes(nodes[0], nodes[1]);
drawEdgeBetweenNodes(nodes[1], nodes[2]);
drawEdgeBetweenNodes(nodes[2], nodes[3]);
drawEdgeBetweenNodes(nodes[2], nodes[4]);
drawEdgeBetweenNodes(nodes[2], nodes[5]);

getPathCoordinates(getNodeForName("start"), getNodeForName("node0"));
getPathCoordinates(getNodeForName("node0"), getNodeForName("node1"));
getPathCoordinates(getNodeForName("node1"), getNodeForName("node2"));
getPathCoordinates(getNodeForName("node1"), getNodeForName("node3"));
getPathCoordinates(getNodeForName("node1"), getNodeForName("node4"));


nodes.forEach(drawNode);
setPathTiles();
