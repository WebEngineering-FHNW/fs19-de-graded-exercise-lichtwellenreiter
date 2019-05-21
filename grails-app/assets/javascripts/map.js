const bw = window.innerWidth;
const bh = window.innerHeight;

//padding around grid
const p = 0;


//size of canvas
const cw = bw + p + 1;
const ch = bh + p + 1;

// size of one tile
const tileW = 40;
const tileH = 40;

// do show the grid
const showGrid = 0;

let mapCanvasLayer = document.getElementById("mapLayer1");
let mapContainer = document.getElementById("mapContainer");

mapCanvasLayer.width = cw;
mapCanvasLayer.height = ch;

let characterCanvasLayer = document.getElementById("mapLayer2");
let characterLayer = characterCanvasLayer.getContext("2d");

characterCanvasLayer.width = cw;
characterCanvasLayer.height = ch;


const helper = new Helper(tileW, tileH);
const character = new Character(40, characterLayer, helper);

mapContainer.scrollTo(mapContainer.left + mapContainer.width / 2, mapContainer.top + mapContainer.height / 2);

let layer1 = mapCanvasLayer.getContext("2d");
let pathCoords = [];
let nodes = [];
let edges = []

const helpButton = document.getElementById("helpButton");
const helpModal = document.getElementById('helpModal');
const nodeModal = document.getElementById('nodeModal');


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
            layer1.drawImage(image, helper.getXCoord(i), helper.getYCoord(j), tileW, tileH);
        }
    }
}


/**
 * Draw Edge between two Nodes
 * @param n1
 * @param n2
 */
function drawEdgeBetweenNodes(n1, n2) {
    layer1.beginPath();
    layer1.moveTo(helper.getXCoord(n1.x) + (0.5 * tileW), helper.getYCoord(n1.y) + (0.5 * tileH));
    layer1.lineTo(helper.getXCoord(n1.x) + (0.5 * tileW), helper.getYCoord(n2.y) + (0.5 * tileH));
    layer1.lineTo(helper.getXCoord(n2.x) + (0.5 * tileW), helper.getYCoord(n2.y) + (0.5 * tileH));

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

    let endX = n2.x - 1;
    let endY = n2.y - 1;


    pathCoords.push({"x": cornerX, "y": cornerY});
    pathCoords.push({"x": n2.x, "y": n2.y});

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
            //// //console.log(cornerY);
        }
    }

    if (endX < cornerX) {

        while (endX != cornerX) {
            pathCoords.push({"x": endX, "y": endY});
            endX++;
            //// //console.log(endX);
        }
    } else {
        // CornerX < StartX
        while (cornerX != endX) {
            pathCoords.push({"x": endX, "y": cornerY});
            cornerX++;
            //// //console.log(cornerX);
        }
    }

    //// //console.log(pathCoords);
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

        for (let i = 0; i < node.edge.length; i++) {

            let nnode = getNodeForType(node.edge[i]);

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
 * @param type
 * @returns {*[]}
 */
function getNodeForType(type) {
    return nodes.find(node => node.type === type);
}

function getNodeForId(id) {
    return nodes.find(node => node.id === id);
    ;
}

function generateStartNode() {

    const centerX = Math.round((bw / tileW) / 2);
    const centerY = Math.round((bh / tileH) / 2);

    let startNode = {
        type: "start",
        id: 0,
        name: "Starting Node",
        x: centerX,
        y: centerY
    };

    nodes.push(startNode);

}



function drawNodes() {

    nodes.forEach(node => {

        if (node.type === "start") {

            const startImage = new Image();
            startImage.src = "/assets/dnc/node/start.png";
            layer1.drawImage(startImage, helper.getXCoord(node.x), helper.getYCoord(node.y), tileW, tileH);

        } else {
            const nodeImage = new Image();
            nodeImage.src = "/assets/dnc/node/node.png";
            layer1.drawImage(nodeImage, helper.getXCoord(node.x), helper.getYCoord(node.y), tileW, tileH);
        }

    });
}

function drawPaths() {
    edges.forEach(edge => {
        drawEdgeBetweenNodes(getNodeForId(edge.parent.id), getNodeForId(edge.child.id));
    });
}

/**
 * Get Data from Backend
 */
helper.doGet('/module',
    (err, data) => {
        if (err !== null) {
            alert('Cannot calling Map Data \n' +
                'Error raised: ' + err.number + '\n' +
                'Is the server running?');
        } else {
            nodes = data;
            helper.doGet('/edge', (err, data) => {

                if (err !== null) {
                    alert('Cannot calling Map Data \n' +
                        'Error raised: ' + err.number + '\n' +
                        'Is the server running?');
                } else {
                    edges = data;
                    setupMap();
                }
            })
        }
    });


/**
 * Execute after initial Ajax loading of Nodes
 */
function setupMap() {

    drawGrid();
    drawBackground();

    drawPaths();
    drawNodes();


    const startNode = getNodeForType("start");
    character.setStartNode(startNode);

    animate();

}

function animate() {
    requestAnimationFrame(animate);
    characterLayer.clearRect(0, 0, characterLayer.width, characterLayer.height);
    character.draw();
}


function openModal(node) {
    localStorage.setItem('modalOpen', "true");
    this.nodeModal.style.display = "block";
    document.getElementById("nodeModalTitle").innerText = node.name;
    document.getElementById("nodeModalNodeName").innerText = node.abbreviation;

    if ("-" === node.description) {
        document.getElementById("nodeModalNodeDescription").innerHTML = "no description available";
    } else {
        document.getElementById("nodeModalNodeDescription").innerHTML = node.description;
    }

    if (true === node.msp) {
        document.getElementById("nodeModalMSP").innerHTML = "final exam";
    } else {
        document.getElementById("nodeModalMSP").innerHTML = "NO final exam";
    }
    document.getElementById("nodeModalCredits").innerHTML = "ECTS: " + node.credits + " / ";


}

function closeModal() {
    this.helpModal.style.display = "none";
    this.nodeModal.style.display = "none";
    localStorage.removeItem("modalOpen");
}

function canPlayerWalk(x, y) {
    return true;
}

function isPlayerOnNode(x, y) {
    const index = this.nodes.findIndex(n => {
        return (n.x === x && n.y === y);
    });
    //console.log("playerOnNode: " + index);
    return index !== -1;
}

function isPlayerOnPath(x, y) {
    const index = pathCoords.findIndex((item, index) => {
        return (item.x === x && item.y === y);
    });
    //console.log("playerOnPath: " + index);
    return index !== -1;
}

function getNodeForCharacterPosition() {
    const x = Math.round(character.x / 40);
    const y = Math.round(character.y / 40);

    let node = nodes.filter(n => {
        if (n.x === x && n.y === y) {

            if (n.type !== "start") {
                console.log("Character is on node. Node: " + n.abbreviation);
                return n;
            }

        }
    });

    openModal(getNodeForId(node[0].id));
}


mapCanvasLayer.onmousemove = function (e) {

    let mouseX, mouseY;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    document.getElementById("mousex").innerHTML = mouseX;
    document.getElementById("mousey").innerHTML = mouseY;


};

mapCanvasLayer.onmouseleave = function (e) {
    document.getElementById("mousex").innerHTML = "???";
    document.getElementById("mousey").innerHTML = "???";

};

mapContainer.onscroll = function (e) {
    document.getElementById("scrollx").innerHTML = window.scrollX;
    document.getElementById("scrolly").innerHTML = window.scrollY;
};

window.onkeydown = function (e) {

    switch (e.code) {
        case 'ArrowUp':
            if (character.y !== 0) {
                if (this.canPlayerWalk(character.x, character.y - character.step)) {
                    character.run = true;
                    character.y -= character.step;
                }
            }
            break;
        case 'ArrowLeft':
            if (character.x !== 0) {
                if (this.canPlayerWalk(character.x - character.step, character.y)) {
                    character.run = true;
                    character.x -= character.step;
                }
            }
            break;
        case 'ArrowRight':

            if (this.canPlayerWalk(character.x + character.step, character.y)) {
                character.run = true;
                character.x += character.step;
            }
            break;
        case 'ArrowDown':
            if (this.canPlayerWalk(character.x, character.y + character.step)) {
                character.run = true;
                character.y += character.step;
            }
            break;

        case 'Space':

            console.log(character.x);
            console.log(character.y);

            if (localStorage.getItem("modalOpen") === "true") {
                closeModal();
            } else {
                getNodeForCharacterPosition();
            }
            break;
        case 'Escape':
            this.closeModal();
            break;
    }
};

window.onkeyup = function (e) {
    character.run = false;
};


window.onclick = function (event) {
    if (event.target === this.helpModal || event.target === this.nodeModal) {
        this.closeModal();
    }
};


helpButton.onclick = function () {
    helpModal.style.display = "block";
    localStorage.setItem("modalOpen", "true");
};
