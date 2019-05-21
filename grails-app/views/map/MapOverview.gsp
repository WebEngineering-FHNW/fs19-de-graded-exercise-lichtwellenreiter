<%--
  Created by IntelliJ IDEA.
  User: florian
  Date: 2019-05-03
  Time: 06:37
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<!doctype html>
<html lang="en">
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

    <div class="stat-bar">
        <div class="stat-left">
            <a href="${createLink(uri: '/')}">Player: <sec:username/></a>
            <asset:image src="dnc/characters/ogre.png" alt="ogre"/>
        </div>

        <div class="stat-center">

            <ul class="keyring">
                <li>
                    <span class="keyname">Programming</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace" alt="key"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace" alt="key"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace" alt="key"/>
                </li>
                <li>
                    <span>FIRST</span>
                    <asset:image src="dnc/key/key-inactive.png" class="keyplace" alt="key"/>
                </li>
            </ul>
        </div>

        <div class="stat-right">
            <a href="#" id="helpButton">&quest;</a>
            <a href="${createLink(uri: '/logout')}">logout</a>
        </div>
    </div>

    <div class="main-map" id="mapContainer">
        <canvas id="mapLayer1"></canvas>
        <canvas id="mapLayer2"></canvas>
    </div>
    <div class="footer-bar">
        <div class="footer-text">Mouse X: <span id="mousex">??</span> Y: <span id="mousey">??</span></div>

        <div class="footer-text">Scroll X: <span id="scrollx">??</span> Y: <span id="scrolly">??</span></div>

        <div class="footer-text">Numbers of Tiles: <span id="numTiles"></span></div>

        <div class="footer-text"></div>

        <div class="footer-text"></div>
    </div>
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

        <h3 id="nodeModalTitle">modulename</h3>

        <p>Modul:  <span id="nodeModalNodeName"></span></p>

        <p id="nodeModalNodeDescription"></p>
    </div>
</div>



<!-- load all needed images for later use in JS -->
<asset:image src="dnc/floor/floor_1.png" style="display:none" alt="floortile1"/>
<asset:image src="dnc/floor/floor_2.png" style="display:none" alt="floortile2"/>
<asset:image src="dnc/floor/floor_3.png" style="display:none" alt="floortile3"/>
<asset:image src="dnc/floor/floor_4.png" style="display:none" alt="floortile4"/>
<asset:image src="dnc/floor/floor_5.png" style="display:none" alt="floortile5"/>

<!-- Nodes -->
<asset:image src="dnc/node/node.png" style="display:none" alt="node"/>
<asset:image src="dnc/node/start.png" style="display:none" alt="start"/>
<asset:image src="dnc/node/running.png" style="display:none" alt="running"/>

<!-- Character -->
<asset:image src="dnc/characters/ogre/f0.png" alt="ogre0"/>
<asset:image src="dnc/characters/ogre/f1.png" alt="ogre1"/>
<asset:image src="dnc/characters/ogre/f2.png" alt="ogre2"/>
<asset:image src="dnc/characters/ogre/f3.png" alt="ogre3"/>


<asset:javascript src="map-helper.js"/>
<asset:javascript src="map.js"/>
<asset:javascript src="map-character.js"/>
<asset:javascript src="map-listener.js"/>
</body>
</html>