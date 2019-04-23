<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-04-22
  Time: 13:55
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dungeons'n'Credits</title>
    <asset:stylesheet src="start.css"/>
</head>

<body>

<main>

    <section class="center-box login" id="login">
        <h2>Dungeons'n'Credits</h2>
        <h4>Login to your journey</h4>

        <form>
            <label for="email">Username</label>
            <input id="email" name="email" type="email">

            <label for="password">Password</label>
            <input id="password" name="password" type="password">

            <button class="btn btn-block" type="submit">login</button>
        </form>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes('register')">need an account?</p>
            <p class="box-toggle" onclick="toggleBoxes('pwlost')">lost password?</p>
            <p class="box-toggle" onclick="toggleBoxes('allabout')">What is it all about?</p>
        </div>
    </section>


    <section class="center-box register" id="register">
        <h2>Dungeons'n'Credits</h2>
        <h4>Register to start the journey</h4>

        <form>

        </form>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes()">already got an account?</p>
            <p class="box-toggle" onclick="toggleBoxes('allabout')">What is it all about?</p>
        </div>
    </section>

    <section class="center-box pw-lost" id="pwlost">
        <h2>Dungeons'n'Credits</h2>
        <h4>Enter your E-Mail to reset access to your account</h4>

        <form>

            <input type="email" name="email">
            <button type="submit">request</button>

        </form>

        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes()">nevermind! go back.</p>
            <p class="box-toggle" onclick="toggleBoxes('allabout')">What is it all about?</p>
        </div>
    </section>

    <section class="center-box pw-lost" id="allabout">
        <h2>Dungeons'n'Credits</h2>
        <h4>What is it all about?</h4>

        <p>
            This is a gamification of the module Path at the FHNW BSc Computer Science. It is part of the webec Module.
        </p>


        <div class="footer-info">
            <p class="box-toggle" onclick="toggleBoxes()">thanks, but go back.</p>
        </div>
    </section>

</main>

<script>

    var loginBox = document.getElementById("login")
    var registerBox = document.getElementById("register");
    var lostPwBox = document.getElementById("pwlost");
    var allAbout = document.getElementById("allabout");

    function toggleBoxes(requestBox) {

        switch (requestBox) {
            case 'register':
                loginBox.style.visibility = 'hidden';
                registerBox.style.visibility = 'visible';
                lostPwBox.style.visibility = 'hidden';
                allAbout.style.visibility = 'hidden';
                break;
            case 'pwlost':
                loginBox.style.visibility = 'hidden';
                registerBox.style.visibility = 'hidden';
                lostPwBox.style.visibility = 'visible';
                allAbout.style.visibility = 'hidden';
                break;
            case 'allabout':
                loginBox.style.visibility = 'hidden';
                registerBox.style.visibility = 'hidden';
                lostPwBox.style.visibility = 'hidden';
                allAbout.style.visibility = 'visible';
                break;
            default:
                loginBox.style.visibility = 'visible';
                registerBox.style.visibility = 'hidden';
                lostPwBox.style.visibility = 'hidden';
                allAbout.style.visibility = 'hidden';
                break;
        }
    }

    toggleBoxes();

</script>

</body>
</html>