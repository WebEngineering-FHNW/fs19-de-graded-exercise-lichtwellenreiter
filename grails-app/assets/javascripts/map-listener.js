mapCanvas.onmousemove = function (e) {

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

mapCanvas.onmouseleave = function (e) {
    document.getElementById("mousex").innerHTML = "???";
    document.getElementById("mousey").innerHTML = "???";

};

mapContainer.onscroll = function (e) {
    document.getElementById("scrollx").innerHTML = window.scrollX;
    document.getElementById("scrolly").innerHTML = window.scrollY;
};


mapContainer.onkeydown = function (e) {

    console.log("key:" + e.key);

    character.oldpos.x = character.x;
    character.oldpos.y = character.y;

    switch (e.key) {
        case 'ArrowUp':
            character.y -= character.step;
            break;
        case 'ArrowLeft':
            character.x -= character.step;
            break;
        case 'ArrowRight':
            character.x += character.step;
            break;
        case 'ArrowDown':
            character.y += character.step;
            break;
    }

};