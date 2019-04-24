<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-04-22
  Time: 15:00
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dungeons'n'Credits</title>
    <asset:stylesheet src="map.css"/>
</head>

<body>

<main>
    <section class="stat-bar">
        <div class="stat-left">
            Player //need currentLoggedinUser
        </div>
        <div class="stat-right">
            <a href="${createLink(uri: '/logout')}">logout</a>
        </div>
    </section>

    <section class="main-map">
        <canvas id="cvs"></canvas>
    </section>

    <section class="footer-bar">
        <div class="footer-text">Mouse X: <span id="mousex">??</span> Y: <span id="mousey">??</span></div>
        <div class="footer-text">Scroll X: <span id="scrollx">??</span> Y: <span id="scrolly">??</span></div>
    </section>
</main>
<asset:javascript src="map.js"/>
<asset:javascript src="map-listener.js"/>
</body>
</html>