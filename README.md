# WebEngineering Module, Graded Exercise

## Commit Proposal

Matriculation Number: 17-549-171  
Email               : florian.thievent@students.fhnw.ch

Project idea short description: 

#### General Idea
The goal is to add an extra level of gamification to the personal study planning. The module Path should be displayed as a progress path. With gems you can unlock modules on your path on the journey to 180 Credits. When all Keys are found in the four different worlds "Foundation", "Became Expert", "Context" and "Project" you are able to unlock and open the Gates to the Final Boss "Thesis".
Let's call it:  

```
    ___                                          _     _     ___             _ _ _       
   /   \_   _ _ __   __ _  ___  ___  _ __  ___  ( ) __( )   / __\ __ ___  __| (_) |_ ___ 
  / /\ / | | | '_ \ / _` |/ _ \/ _ \| '_ \/ __| |/ '_ \/   / / | '__/ _ \/ _` | | __/ __|
 / /_//| |_| | | | | (_| |  __/ (_) | | | \__ \  | | | |  / /__| | |  __/ (_| | | |_\__ \
/___,'  \__,_|_| |_|\__, |\___|\___/|_| |_|___/  |_| |_|  \____/_|  \___|\__,_|_|\__|___/
                    |___/                                                                                                                  
```

#### Inspiration
Inspiration for the path was found in the Map design of SuperMario Bros 3:
![alt text](https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YULN5mCL_ST697b7LPuH5gHaEl%26pid%3DApi&f=1 "SuperMario 2 Map Design")


or the Minecraft Crafting Achievement Map:
![alt text](https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fguides.gamepressure.com%2Fminecraft%2Fgfx%2Fword%2F857280359.jpg&f=1 "Minecraft Achievement Map")

#### Implementation
The Application consists of "normal" CRUD Operations and REST Endpoints. As Addition i will try to add a level of graph theory to determine the Paths. 

A small PoC can be found in this [jsfiddle](https://jsfiddle.net/lichtwellenreiter/vr5e7fg3/) because I don't wan't rely on huge JS Framworks.

## Project confirmation

Cool. That sounds like considerable effort, though.
Try to find a way to have a simple version running and expand from there.

Confirmed.

D. König


## Project delivery <to be filled by student>

How to start the project: (if other than `grailsw run-app`)

How to test the project:  (if other than `grailsw test-app`)

Hand-written, static HTML 
project description:      (if other than `index.html` in project root directory)  
You can find a description in the html on startup under the link: _What is it all about?_

External contributions:  
Thanks to  
-- Christopher Lis www.christopherlis.com | https://github.com/christopher4lis and his awesome youtube channel. That pushed me really into JS Canvas Element  
-- w3schools - for the awesome tutorials, documentation and styling tipps (shoutout to tooltip)  
-- danglingmouse http://danglingmouse.com/ for the great artowrk used as login screen  
-- pixelartinc https://pixelartinc.tumblr.com/post/175512041614 for that genius error screen background  
-- 0x72 https://0x72.itch.io/dungeontileset-ii where I got these beatiful dungeontiles and character images  
-- the community at stackoverflow to showing me how to deal with XMLHttpRequest https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript so I didnt had to use jQuery  
and last but not least  
to all the blogs, magazines, books, videos that I consumed while I was working on this project.

Other comments:  
-- Login to System by using credentials student/student  
-- sadly I was not able to implement all functions due to not enough time (as example: player has to stay on path, ...)  
-- app does not work in safari & chrome due to canvas rendering issues. Implemented a browser check.

I'm particular proud of:  
-- the exessive use of the canvas element to draw the map and the paths  
-- started this awesome app only with bare JS (no external library is used) and a stable Backend. 


## Project grading 

It appears that the static index.html was not given. Missing add/commit/push ?

The application works to the extend that the functionality was implemented.

Functionality:
- very basic navigation
- user input via arrow keys
- validation via domain class constraints
- customized login/home view
- basic role-based security
- domain classes to capture the world with modules and edges
  the domain is exposed as REST services
  the game board is build dynamically from the domain data
  user can lead a sprite over the board with arror keys
  domain data prefilled in the bootstrap
  no CRUD operations available to the user
  
Engineering:
- very extensive commit log (112 commits is a new record high)
- there is one really nice data-driven test for a domain constraint, but many tests are missing
- all other aspects are fine

I award extra points for exposing and calling services as well as the extra effort that is clearly
visible from the commit log.

The nature of this project makes it difficult to grade as it does not follow a classical WebMVC
approach but rather that of a single-page application with a fat-client architecture.
Future modules (security, web programming, web clients, ...) will show you more options of how to further improve
your current solution (fetch API, animation, JWT).
I very much appreciate your courage to take the unconventional path, the creative spirit that
you have shown in the exercise, your developer pride to stay away from big js frameworks, and
the extra effort that you have invested.

Congratulations!

Grade: 6.0

P.S. 
I'd be interested to know which canvas feature prohibited you from supporting Safari/Chrome as
painting on the canvas is usually one the few features that is really  well supported
across all browsers. 
