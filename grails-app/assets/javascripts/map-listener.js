
cvs.onmousemove = function (e) {

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


}

cvs.onmouseleave = function (e) {
    document.getElementById("mousex").innerHTML = "???";
    document.getElementById("mousey").innerHTML = "???";

}

window.onscroll = function (e) {
    document.getElementById("scrollx").innerHTML = window.scrollX;
    document.getElementById("scrolly").innerHTML = window.scrollY;
}