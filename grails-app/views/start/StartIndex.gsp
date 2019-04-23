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
    <asset:stylesheet src="bootstrap.css"/>
    <asset:stylesheet src="start.css"/>
</head>
<body>

<main>

    <section class="center-box login" id="login">
        <h1>Dungeons'n'Credits</h1>
        <h2>Login to your journey</h2>
        <form class="form-control form-horizontal">

            <label for="email">Username</label>
            <input id="email" name="email" type="email">



            <label for="password">Password</label>
            <input id="password" name="password" type="password">



            <button class="btn btn-block" type="submit">login</button>


        </form>

        <div class="footer-info">
        need an account?
        lost password?<br/>
        What ist that all about?
        </div>
    </section>


    <section class="center-box register" id="register">
        <h1>Dungeons'n'Credits</h1>
        <h2>Register to start the journey</h2>
        <form>

        </form>
        <div class="footer-info">
        already got an account?
        What ist that all about?
        </div>
    </section>

    <section class="center-box pw-lost" id="pw-lost">
        <h1>Dungeons'n'Credits</h1>
        <h2>Enter your E-Mail to get access to your account again</h2>
        <form>

        </form>
        <div class="footer-info">
        nevermind! gho back.
        What ist that all about?
        </div>
    </section>

</main>

<script>

    var registerBox = document.getElementById("register");
    var lostPwBox = document.getElementById("pw-lost");

    registerBox.style.display = 'none';
    lostPwBox.style.display = 'none';


</script>

</body>
</html>