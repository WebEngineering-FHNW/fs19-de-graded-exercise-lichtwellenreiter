/**
 * These are some Helper Functions for the Map and Character implementation
 */


/**
 * Calculate X Coord
 * @param x
 * @returns {number}
 */
function getXCoord(x) {
    return x * tileW
}

/**
 * Calculate Y Coord
 * @param y
 * @returns {number}
 */
function getYCoord(y) {
    return y * tileH
}

/**
 * REST Functions, returning JSON
 */


const SERVER_URL = "http://localhost:8080";

let doGet = function (resource, callback) {

    let url = SERVER_URL + resource;
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
            }

            callback(error, xhr.response);
        }
    };
    xhr.send();
};