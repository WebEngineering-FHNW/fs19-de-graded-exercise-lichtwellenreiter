//grid width and height
var bw = 2700;
var bh = 1600;
//padding around grid
var p = 0;

//size of canvas
var cw = bw + p + 1;
var ch = bh + p + 1;

// size of one tile
var tileW = 40;
var tileH = 40;

var showGrid = 0;
var hover = false, id;

var cvs = document.getElementById("cvs");
cvs.width = cw;
cvs.height = ch;

window.scrollTo(cvs.width / 6, cvs.height / 6);




var context = cvs.getContext("2d");

var nodes = [
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


function drawGrid() {

    if (1 === showGrid) {

        for (var x = 0; x <= bw; x += tileW) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }


        for (var x = 0; x <= bh; x += tileH) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
    }
}

function drawNode(item, index) {
    let x = findX(item.x)
    let y = findY(item.y)
    context.fillRect(x, y, tileW, tileH);
}

function findX(x) {
    return x * tileW
}

function findY(y) {
    return y * tileH
}

function drawEdgeBetweenNodes(n1, n2) {

    context.moveTo(findX(n1.x) + (0.5 * tileW), findY(n1.y) + (tileH));
    context.lineTo(findX(n1.x) + (0.5 * tileW), findY(n2.y) + (0.5 * tileH));
    context.lineTo(findX(n2.x) + (0.5 * tileW), findY(n2.y) + (0.5 * tileH));

    context.strokeStyle = "black";
    context.stroke();


}

function drawEdges(node, index) {

    const centerW = 0.5 * tileW;
    const centerH = 0.5 * tileH;

    if (undefined != node.edge && node.edge.length > 0) {

        for (i = 0; i < node.edge.length; i++) {

            var nnode = getNodeForName(node.edge[i]);

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

function getNodeForName(name) {
    return nodes.filter(n => {
        if (n.name === name) {
            return n;
        }
    });
}


drawGrid();


nodes.forEach(drawNode);
//nodes.forEach(drawEdges)


drawEdgeBetweenNodes(nodes[0], nodes[1]);
drawEdgeBetweenNodes(nodes[1], nodes[2]);
drawEdgeBetweenNodes(nodes[1], nodes[3]);
drawEdgeBetweenNodes(nodes[1], nodes[4]);