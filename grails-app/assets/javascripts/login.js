


let loginBox = document.getElementById("login");
let registerBox = document.getElementById("register");
let allAbout = document.getElementById("allabout");
let notsupported = document.getElementById("notsupported");


let browser = navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();


if (browser.includes("Firefox") || browser.includes("firefox")) {

    notsupported.style.visibility = 'hidden';


    function toggleBoxes(requestBox) {

        switch (requestBox) {
            case 'register':
                loginBox.style.visibility = 'hidden';
                registerBox.style.visibility = 'visible';
                allAbout.style.visibility = 'hidden';
                localStorage.setItem('lastPage', 'register');
                break;
            case 'allabout':
                loginBox.style.visibility = 'hidden';
                registerBox.style.visibility = 'hidden';
                allAbout.style.visibility = 'visible';
                localStorage.setItem('lastPage', '');
                break;
            default:
                loginBox.style.visibility = 'visible';
                registerBox.style.visibility = 'hidden';
                allAbout.style.visibility = 'hidden';
                localStorage.setItem('lastPage', '');
                break;
        }
    }

    toggleBoxes(localStorage.getItem('lastPage'));


    let password = document.getElementById("register-password"),
        confirm_password = document.getElementById("register-password-confirmation");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

} else {
    loginBox.style.visibility = 'hidden';
    registerBox.style.visibility = 'hidden';
    allAbout.style.visibility = 'hidden';
    notsupported.style.visibility = 'visible';
}