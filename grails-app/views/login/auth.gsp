<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-04-22
  Time: 13:55
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dungeons'n'Credits</title>
    <asset:stylesheet src="login.css"/>
</head>

<body>

<main>

    <section class="center-box login" id="login">
        <h2>Dungeons'n'Credits</h2>
        <h4>Login to your journey</h4>

        <form action="/login/authenticate" method="POST" id="loginForm" autocomplete="off" class="form-outer">
            <div class="form-elem">
                <label for="login-username">Username</label>
                <input type="text" class="text_" name="username" id="login-username"/>
            </div>

            <div class="form-elem">
                <label for="login-password">Password</label>
                <input type="password" class="text_" name="password" id="login-password"/>
            </div>

            <div class="form-elem form-elem-sm">
                <input type="checkbox" class="chk" name="remember-me" id="remember_me"/>
                <label for="remember_me">Stay loggedin</label>
            </div>

            <div class="form-elem form-button">
                <button type="submit" class="button" id="submit">login</button>
            </div>
        </form>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes('register')">need an account?</p>

            <p class="box-toggle" onclick="toggleBoxes('allabout')">What is it all about?</p>
        </div>
    </section>


    <section class="center-box register" id="register">
        <h2>Dungeons'n'Credits</h2>
        <h4>Register to start the journey</h4>

        <form action="/user/register" method="POST" id="registerForm" autocomplete="off" class="form-outer">
            <div class="form-elem">
                <label for="register-username">Username</label>
                <input type="text" class="text_" name="username" id="register-username"/>
            </div>

            <div class="form-elem">
                <label for="register-password">Password</label>
                <input type="password" class="text_" name="password" id="register-password" required/>
            </div>

            <div class="form-elem">
                <label for="register-password-confirmation">Password Confirmation</label>
                <input type="password" class="text_" name="passwordConfirmation" id="register-password-confirmation"
                       required/>
            </div>

            <div class="form-elem form-button">
                <button type="submit" class="button" id="registerButton">register</button>
            </div>
        </form>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes()">already got an account?</p>

            <p class="box-toggle" onclick="toggleBoxes('allabout')">What is it all about?</p>
        </div>
    </section>

    <section class="center-box pw-lost" id="allabout">
        <h2>Dungeons'n'Credits</h2>
        <h4>What is it all about?</h4>

        <div class="about-text">
            <p>
                This is a gamification of the module Path at the FHNW BSc Computer Science. It is part of the webec Module. You can track your journey at the FHNW with ease and fun.<br/>
                Login with student/student
            </p>
            <p>
                More about FHNW: <a href="https://www.fhnw.ch/en/startseite" target="_blank">Website</a>
            </p>
        </div>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes()">thanks, but go back.</p>
        </div>
    </section>

</main>

<script>

    let loginBox = document.getElementById("login");
    let registerBox = document.getElementById("register");
    let allAbout = document.getElementById("allabout");

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

</script>

</body>
</html>