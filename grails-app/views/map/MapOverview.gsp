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
        <span>Mouse X: <span id="mousex">??</span></span> <span>Y: <span id="mousey">??</span></span><br/>
        <span>Scroll X: <span id="scrollx">??</span></span> <span>Y: <span id="scrolly">??</span></span>
    </section>
    <section class="main-map">
        <canvas id="cvs"></canvas>
    </section>
</main>
<asset:javascript src="map.js"/>
<asset:javascript src="map-listener.js"/>
</body>
</html>