// Modal Fields
let helpModal = document.getElementById('helpModal');
let nodeModal = document.getElementById('nodeModal');
let help = document.getElementById("helpButton");

mapCanvasLayer1.onmousemove = function (e) {

    var mouseX, mouseY;

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
            console.log("character on path decision " + characterOnPath());
            if (character.y !== 0) {
                if (characterOnPath()) {
                    character.y -= character.step;
                }
            }
            break;
        case 'ArrowLeft':
            console.log("character on path decision " + characterOnPath());
            if (character.x !== 0) {
                if (characterOnPath()) {
                    character.x -= character.step;
                }
            }
            break;
        case 'ArrowRight':

            console.log("character on path decision " + characterOnPath());

            if (characterOnPath()) {
                character.x += character.step;
            }
            break;
        case 'ArrowDown':
            console.log("character on path decision " + characterOnPath());
            if (characterOnPath()) {
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


function characterOnPath() {

    let x = Math.round(character.x / 40);
    let y = Math.round(character.y / 40);


    return pathCoords.forEach((item, index) => {

        console.log("CHECkED: " + item.x + " " + item.y);
        console.log("CHARACTER: " + x + " " + y);
        console.log("DECISION " + (item.x === x && item.y === y));
        console.log("");

        if (item.x === x && item.y === y) {
            return true;
        }
    });
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