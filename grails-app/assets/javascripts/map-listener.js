export function Listener(character, nodes) {
    this.helpModal = document.getElementById('helpModal');
    this.nodeModal = document.getElementById('nodeModal');
    this.nodes = nodes;
    this.character = character;
    this.help = document.getElementById("helpButton");
    this.mapCanvasLayer = document.getElementById("mapLayer1");
    this.mapContainer = document.getElementById("mapContainer");

}

Listener.prototype.registerListener = function () {

    this.mapCanvasLayer.onmousemove = function (e) {

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

    this.mapCanvasLayer.onmouseleave = function (e) {
        document.getElementById("mousex").innerHTML = "???";
        document.getElementById("mousey").innerHTML = "???";

    };

    this.mapContainer.onscroll = function (e) {
        document.getElementById("scrollx").innerHTML = window.scrollX;
        document.getElementById("scrolly").innerHTML = window.scrollY;
    };

    window.onkeydown = function (e) {

        switch (e.code) {
            case 'ArrowUp':
                if (this.character.y !== 0) {
                    if (this.canPlayerWalk(this.character.x, this.character.y - this.character.step)) {
                        this.character.run = true;
                        this.character.y -= this.character.step;
                    }
                }
                break;
            case 'ArrowLeft':
                if (this.character.x !== 0) {
                    if (this.canPlayerWalk(this.character.x - this.character.step, this.character.y)) {
                        this.character.run = true;
                        this.character.x -= this.character.step;
                    }
                }
                break;
            case 'ArrowRight':

                if (this.canPlayerWalk(this.character.x + this.character.step, this.character.y)) {
                    this.character.run = true;
                    this.character.x += this.character.step;
                }
                break;
            case 'ArrowDown':
                if (this.canPlayerWalk(this.character.x, this.character.y + this.character.step)) {
                    this.character.run = true;
                    this.character.y += this.character.step;
                }
                break;

            case 'Space':
                if (localStorage.getItem("modalOpen") === "true") {
                    this.closeModal();
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
        this.character.run = false;
    };


    window.onclick = function (event) {
        if (event.target === helpModal || event.target === nodeModal) {
            this.closeModal();
        }
    };


    this.help.onclick = function () {
        helpModal.style.display = "block";
        localStorage.setItem("modalOpen", "true");
    };


};


Listener.prototype.openNodeModal = function (node) {
    nodeModal.style.display = "block";
    document.getElementById("nodeModalTitle").innerText = node.namelong;
    document.getElementById("nodeModalNodeName").innerText = node.abbr;
    document.getElementById("nodeModalNodeDescription").innerHTML = node.description;
};


Listener.prototype.closeModal = function () {
    helpModal.style.display = "none";
    nodeModal.style.display = "none";
    localStorage.removeItem("modalOpen");
};

/**
 * Check if a Player can Step on the next tile
 * @param x
 * @param y
 */

/*function canPlayerWalk(x, y) {

    //console.log("Player next Tile: " + x + " " + y);

    let xCoord = Math.round(x / 40);
    let yCoord = Math.round(y / 40);

    //console.log("Player next Tile: " + xCoord + " " + yCoord);

    let checkPath = isPlayerOnPath(xCoord, yCoord);
    let checkNode = isPlayerOnNode(xCoord, yCoord);

    //console.log("Check for Path: " + checkPath);
    //console.log("Check for Node: " + checkNode);

    if (!checkPath) {
        if (checkNode) {
            return true;
        }
    } else {
        return true;
    }


    return false;

}*/

Listener.prototype.canPlayerWalk = function (x, y) {
    return true;
}

Listener.prototype.isPlayerOnNode = function (x, y) {
    const index = this.nodes.findIndex(n => {
        return (n.x === x && n.y === y);
    });
    //console.log("playerOnNode: " + index);
    return index !== -1;
}

Listener.prototype.isPlayerOnPath = function (x, y) {
    const index = pathCoords.findIndex((item, index) => {
        return (item.x === x && item.y === y);
    });
    //console.log("playerOnPath: " + index);
    return index !== -1;
}

Listener.prototype.getNodeForCharacterPosition = function () {

    let x = Math.round(this.character.x / 40);
    let y = Math.round(this.character.y / 40);

    return this.nodes.filter(n => {
        if (n.x === x && n.y === y) {


            if (n.name !== "start") {
                //console.log("Character is on Node. Node: " + n.name);
                localStorage.setItem('modalOpen', "true");
                this.openNodeModal(n);
            }

        }
    });
}