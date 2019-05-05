<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-05-03
  Time: 06:37
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dungeons'n'Credits</title>
    <asset:stylesheet src="fonts/font.css"/>
    <asset:stylesheet src="map.css"/>
    <asset:stylesheet src="modal.css"/>
</head>

<body>

<main>

    <section class="stat-bar">
        <div class="stat-left">
            <a href="${createLink(uri: '/')}">Player: <sec:username/></a>
            <asset:image src="dnc/characters/ogre.png"/>
        </div>

        <div class="stat-center">

            <ul class="keyring">
                <li>
                    <span class="keyname">Programming</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace"/>
                </li>
            </ul>
        </div>

        <div class="stat-right">
            <a href="#" id="helpButton">&quest;</a>
            <a href="${createLink(uri: '/logout')}">logout</a>
        </div>
    </section>

    <section class="main-map" id="mapContainer">
        <canvas id="mapLayer1"></canvas>
        <canvas id="mapLayer2"></canvas>
    </section>
    <section class="footer-bar">
        <div class="footer-text">Mouse X: <span id="mousex">??</span> Y: <span id="mousey">??</span></div>

        <div class="footer-text">Scroll X: <span id="scrollx">??</span> Y: <span id="scrolly">??</span></div>

        <div class="footer-text">Numbers of Tiles: <span id="numTiles"></span></div>

        <div class="footer-text"></div>

        <div class="footer-text"></div>
    </section>
</main>

<!-- Help Modal -->
<div id="helpModal" class="modal">
    <div class="modal-content">
        <span class="closeModal">&times;</span>

        <h3>Help</h3>

        <p>Keep track of your Modules @ FHNW with some Gamification.</p>
        <ul>
            <li>Move your Character around by pressing UP, DOWN, LEFT, RIGHT</li>
            <li>When on a Module Node, press SPACE to open the information</li>
            <li>Close this or the Module Box by pressing ESC, SPACE again, clicking the X or anywhere on your the map.</li>
        </ul>
    </div>
</div>


<!-- Node Modal -->
<div id="nodeModal" class="modal">
    <div class="modal-content">
        <span class="closeModal" onclick="closeModal();
        return false">&times;</span>

        <h3 id="nodeModalTitle"></h3>

        <p>Modul:  <span id="nodeModalNodeName"></span></p>

        <p id="nodeModalNodeDescription"></p>
    </div>
</div>



<!-- load all needed images for later use in JS -->
<asset:image src="dnc/floor/floor_1.png" style="display:none"/>
<asset:image src="dnc/floor/floor_2.png" style="display:none"/>
<asset:image src="dnc/floor/floor_3.png" style="display:none"/>
<asset:image src="dnc/floor/floor_4.png" style="display:none"/>
<asset:image src="dnc/floor/floor_5.png" style="display:none"/>
<asset:image src="dnc/floor/floor_6.png" style="display:none"/>
<asset:image src="dnc/floor/floor_7.png" style="display:none"/>
<asset:image src="dnc/floor/floor_8.png" style="display:none"/>


<asset:image src="dnc/node/node.png" style="display:none"/>
<asset:image src="dnc/node/down-left.png" style="display:none"/>
<asset:image src="dnc/node/down-right.png" style="display:none"/>
<asset:image src="dnc/node/up-left.png" style="display:none"/>
<asset:image src="dnc/node/up-right.png" style="display:none"/>
<asset:image src="dnc/node/horizontal.png" style="display:none"/>
<asset:image src="dnc/node/vertical.png" style="display:none"/>


<asset:javascript src="map-helper.js"/>
<asset:javascript src="map.js"/>
<asset:javascript src="map-character.js"/>
<asset:javascript src="map-listener.js"/>
</body>
</html>