import UI from './modules/UI.js'

//initilizing variables and canvas
var ctx = document.getElementById("canvas").getContext("2d");
var playerImg = document.createElement("IMG");
playerImg.src = "img/JetCrop.png";

//loading all things that need loading.

window.onload = function initGame(){
    ctx.drawImage(playerImg,20,200);
}



//VARIABLES
//Player Object holding position
var player = {
    Health: 20,
    x: 20,
    y: 200,

    //player input data
    mPosX: 0,
    mPosY: 0,
    lastMClickX: 0,
    lastMClickY: 0,
    keysDown: {}

}
//Bullet Constructor for instantiation of bullet objects
function Bullet(X, Y) {
    this.x = X;
    this.y = Y;
    this.toX = document.getElementById("canvas").clientWidth;
    //this.toy = toY; NOT IMPLEMENTED YET
}

//Array of bullets to be drawn.
var drawBullets = [];
//A variable to hold all collisionable objects.

//This will update the state of the world for the elapsed time since last render.
function update(progress){
    if(player.keysDown.s){
        player.y += 1;
    }
    if(player.keysDown.w){
        player.y -= 1;
    }

    //This forLoop's job is to update the bullet's and do everything relating to bullets. 
    for(var i = 0; i < drawBullets.length; i++){
        //xPop and yPop are boolean variables seeking to ask if the current drawBullet should be popped.
        var xPop = false;
        // console.log(drawBullets[i].toX) // FOR TESTING
        //If we are lower than where we need to go, go up.
        if(drawBullets[i].x < drawBullets[i].toX){
            drawBullets[i].x = drawBullets[i].x + 1;
        }
        else{
            let temp = drawBullets[drawBullets.length - 1];
            drawBullets[drawBullets.length - 1] = drawBullets[i];
            drawBullets[i] = temp;
            drawBullets.pop();
        }
    }

}



//This will draw all of the updates to the canvas.
function draw(){
    //clearing the canvas of everything
    ctx.clearRect(0,0,800,800);

    ctx.font = "30px Arial";
    ctx.fillText(player.keysDown, 10, 50); 

    ctx.save();
    ctx.translate(player.x + 41,player.y + 18)
    ctx.rotate(-10 * Math.PI/180);
    ctx.drawImage(playerImg,-(83/2), (-37/2));
    ctx.restore();
    
    //ctx.drawImage(playerImg,player.x, player.y); Drawing player without rotation

    for(var i = 0; i < drawBullets.length; i++){
        //console.log(drawBullets[i]);
        ctx.beginPath();
        ctx.arc(drawBullets[i].x, drawBullets[i].y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}






//This will continully loop through the update and draw funtions.
function loop(timestamp) {
    //progress will be the elapsed time since last render.
    var progress = timestamp - lastRender;
    //console.log(progress);
    //updates all game variables before drawing.
    update(progress);
    //draws everything needed drawing to the canvas.
    draw();
    //while closing it checks the time for future reference.
    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}
//init lastRender, a var that holds the amount of time has ellapsed before last loop of loop.
var lastRender = 0;
//Window object represents an open window in a browser.
window.requestAnimationFrame(loop);





//FUNCTIONS INVLOVED WITH UPDATING INFORMATION
//If player clicks on the canvas the event will be passed through this function.
document.getElementById("canvas").onclick = (event) => {

    //check if bits change;
    changeBits();
    
    UI.log(); // test for calling classes

    // create bullets
    // console.log("X: " + event.clientX + ", and Y: " + event.clientY); // FOR TESTING
    player.lastMClickX = event.clientX;
    player.lastMClickY = event.clientY;


    //Bullets being pushed to the draw function.
    //I'm drawing them at the location of the front of the plane.
    // console.log(drawBullets); // FOR TESTING
    var bullet = new Bullet(player.x + 83, player.y + 28.5);
    drawBullets.push(bullet);
    
}

function changeBits(){
    var bits = document.getElementById("bits");
    bits.innerText = parseInt(bits.innerText) - 1;
    if(bits.innerText == "0"){
        restartGame();
    }
}

function restartGame(){
    drawBullets = []; // bullet Array reset
    // collision = []; //not implemented yet
    //redraw everything
        ctx.clearRect(0,0,800,800);
        ctx.drawImage(playerImg,80,80,100,100);
    //Player object
        player.Health = 20;
        player.x = 20;
        player.y = 200;
        player.keysDown = {};
    //bits on top left screen
        var bits = document.getElementById("bits");
        bits.innerText = player.Health;
}



// player input, update the players' keysDown array (used for drawing image of player)
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
function onKeyDown(e){ 
    // console.log(e); // For TESTING
    if (e.key.toLowerCase() == "s") { if (!player.keysDown.s){player.keysDown.s = 's';}}
    if (e.key.toLowerCase() == "w") { if (!player.keysDown.w){player.keysDown.w = 'w'; }}
}
function onKeyUp(e){ // if key is up take it out of the keysDown array
    if (e.key.toLowerCase() == "s") { delete player.keysDown.s}
    if (e.key.toLowerCase() == "w") { delete player.keysDown.w}
}
export default restartGame()