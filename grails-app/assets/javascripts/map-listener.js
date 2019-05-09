// Modal Fields
let helpModal = document.getElementById('helpModal');
let nodeModal = document.getElementById('nodeModal');
let help = document.getElementById("helpButton");

mapCanvasLayer1.onmousemove = function (e) {

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

mapCanvasLayer1.onmouseleave = function (e) {
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
                if (canPlayerWalk(character.x, character.y - character.step)) {
                    character.y -= character.step;
                }
            }
            break;
        case 'ArrowLeft':
            if (character.x !== 0) {
                if (canPlayerWalk(character.x - character.step, character.y)) {
                    character.x -= character.step;
                }
            }
            break;
        case 'ArrowRight':

            if (canPlayerWalk(character.x + character.step, character.y)) {
                character.x += character.step;
            }
            break;
        case 'ArrowDown':
            if (canPlayerWalk(character.x, character.y + character.step)) {
                character.y += character.step;
            }
            break;

        case 'Space':
            if (localStorage.getItem("modalOpen") === "true") {
                closeModal();
            } else {
                getNodeForCharacterPosition();
            }
            break;
        case 'Escape':
            closeModal();
            break;
    }
};

window.onclick = function (event) {
    if (event.target === helpModal || event.target === nodeModal) {
        closeModal();
    }
};


help.onclick = function () {
    helpModal.style.display = "block";
    localStorage.setItem("modalOpen", "true");
};

function openNodeModal(node) {
    nodeModal.style.display = "block";
    document.getElementById("nodeModalTitle").innerText = node.namelong;
    document.getElementById("nodeModalNodeName").innerText = node.abbr;
    document.getElementById("nodeModalNodeDescription").innerHTML = node.description;
}


function closeModal() {
    helpModal.style.display = "none";
    nodeModal.style.display = "none";
    localStorage.removeItem("modalOpen");
}

/**
 * Check if a Player can Step on the next tile
 * @param x
 * @param y
 */
function canPlayerWalk(x, y) {

    console.log("Player next Tile: " + x + " " + y);

    let xCoord = Math.round(x / 40);
    let yCoord = Math.round(y / 40);

    console.log("Player next Tile: " + xCoord + " " + yCoord);

    let checkPath = isPlayerOnPath(xCoord, yCoord);
    let checkNode = isPlayerOnNode(xCoord, yCoord);

    console.log("Check for Path: " + checkPath);
    console.log("Check for Node: " + checkNode);

    if (!checkPath) {
        if (checkNode) {
            return true;
        }
    } else {
        return true;
    }


    return false;

}

function isPlayerOnNode(x, y) {
    const index = nodes.findIndex(n => {
        return (n.x === x && n.y === y);
    });
    console.log("playerOnNode: " + index);
    return index !== -1;
}

function isPlayerOnPath(x, y) {
    const index = pathCoords.findIndex((item, index) => {
        return (item.x === x && item.y === y);
    });
    console.log("playerOnPath: " + index);
    return index !== -1;
}

function getNodeForCharacterPosition() {

    let x = Math.round(character.x / 40);
    let y = Math.round(character.y / 40);

    return nodes.filter(n => {
        if (n.x === x && n.y === y) {


            if (n.name !== "start") {
                console.log("Character is on Node. Node: " + n.name);
                localStorage.setItem('modalOpen', "true");
                openNodeModal(n);
            }

        }
    });
}