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

    switch (e.key) {
        case 'ArrowUp':

            if (character.y !== 0) {
                character.y -= character.step;
            }

            break;
        case 'ArrowLeft':

            if (character.x !== 0) {
                character.x -= character.step;
            }

            break;
        case 'ArrowRight':
            character.x += character.step;
            break;
        case 'ArrowDown':
            character.y += character.step;
            break;
    }

};