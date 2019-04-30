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
            <a href="${createLink(uri: '/')}">Player: <sec:username/></a>
        </div>

        <div class="stat-center">

            <ul class="keyring">
                <li>
                    <span class="keyname">FIRST</span>
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
            <a href="${createLink(uri: '/logout')}">logout</a>
        </div>
    </section>
    <section class="main-map" id="mapContainer">
        <canvas id="map"></canvas>
        <asset:image src="dnc/characters/ogre.png" id="character" />
    </section>
    <section class="footer-bar">
        <div class="footer-text">Mouse X: <span id="mousex">??</span> Y: <span id="mousey">??</span></div>
        <div class="footer-text">Scroll X: <span id="scrollx">??</span> Y: <span id="scrolly">??</span></div>
        <div class="footer-text">Numbers of Tiles: <span id="numTiles"></span></div>
        <div class="footer-text"></div>
        <div class="footer-text"></div>
    </section>
</main>

<!-- load all needed images for later use in JS -->
<asset:image src="dnc/floor/floor_1.png" style="display:none"/>
<asset:image src="dnc/floor/floor_2.png" style="display:none"/>
<asset:image src="dnc/floor/floor_3.png" style="display:none"/>
<asset:image src="dnc/floor/floor_4.png" style="display:none"/>
<asset:image src="dnc/floor/floor_5.png" style="display:none"/>
<asset:image src="dnc/floor/floor_6.png" style="display:none"/>
<asset:image src="dnc/floor/floor_7.png" style="display:none"/>
<asset:image src="dnc/floor/floor_8.png" style="display:none"/>

<asset:image src="dnc/node/wall_banner_blue.png" style="display:none"/>
<asset:image src="dnc/node/wall_banner_green.png" style="display:none"/>
<asset:image src="dnc/node/wall_banner_red.png" style="display:none"/>
<asset:image src="dnc/node/wall_banner_yellow.png" style="display:none"/>

<asset:javascript src="map.js"/>
<asset:javascript src="map-listener.js"/>
<asset:javascript src="map-character.js"/>
</body>
</html>