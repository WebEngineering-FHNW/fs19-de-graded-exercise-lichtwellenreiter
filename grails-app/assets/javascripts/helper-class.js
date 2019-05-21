function Helper(tilew, tileh) {
    this.serverUrl = "http://localhost:8080";
    this.tileW = tilew;
    this.tileH = tileh;
}

Helper.prototype.getXCoord = function (x) {
    return x * this.tileW;
};

Helper.prototype.getYCoord = function (y) {
    return y * this.tileH;
};

Helper.prototype.doGet = function (resource, callback) {

    let url = this.serverUrl + resource;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        let message = xhr.statusText;

        if (status === 200) {
            callback(null, xhr.response);
        } else {

            let error = {
                "number": status,
                "message": message
            };

            callback(error, xhr.response);
        }
    };
    xhr.send();
};
