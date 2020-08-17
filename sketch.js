
// for the image player3 scale should be 0.5
// for the image player1 scale should be 0.1


// create all variables
//create count variable
var count = 0
// create player image variables
var player1R, player1L ,player2R, player2L, player3R, player3L;

//create obstacle image variables
var obstacle1R, obstacle1L, obstacle2R, obstacle2L, obstacle3R, obstacle3L;

//create fire particle variable and image variable
var fire_particle, fire_particle_img;

//create background image variables
var bg1, bg2, bg3;

//create ground variables
var ground1, ground2, ground3;

//create player variable
var player;

//create obstacle variable
var obstacle;

//create gamestate variable
var gameState = 0;

//create background variable
var bg;

// create coordinates variable
var coordinates;

// create time variable
var time;

var rabbitGroup;



// call preload function
function preload(){

  //load all images

  //load player variables

  player1R = loadImage("images/pickaxe_player_right.png");
  player1L = loadImage("images/pickaxe_player_left.png");
  //player2R = loadImage("images/");
  //player2L = loadImage("images/");
  player3R = loadImage("images/fire_player_right.png");
  player3L = loadImage("images/fire_player_left.jpeg");


// load background images

  bg1 = loadImage("images/background1.jpg");
  bg2 = loadImage("images/background2.jpg");


// load images for obstacles
  obstacle1R = loadImage("images/rabbit_right.jpg");
  obstacle1L = loadImage("images/rabbit_left.jpg");
  obstacle2R = loadImage("images/zombie_right.jpeg");
  obstacle2L = loadImage("images/zombie_left.png");
  obstacle3 = loadImage("images/demon_eye.png");
  

}

// call setup function

function setup(){

  // create canvas

  canvas = createCanvas(displayWidth - 20, displayHeight - 20);


// create background sprite and add image

  bg = createSprite(displayWidth/2, displayHeight/2);
  bg.addImage(bg1)
  bg.scale = 1.3


// create player sprite and add image

  player = createSprite(50, displayHeight - 375);
  player.addImage(player1R);


// scale player

  player.scale = 0.1


// create ground sprites and make them invisible

  ground1 = createSprite(160, 595, 320, 30);
  ground2 = createSprite(620, 550,610, 30);
  ground3 = createSprite(1210, 590, 600, 30);

  /*ground1.visible = false
  ground2.visible = false
  ground3.visible = false*/

  rabbitGroup = new Group();

  
}


function draw(){

  // set background color

  background("white");



  /*coordinates.x = World.mouseX;
  coordinates.y = World.mouseY;
  
  console.log("X:" + coordinates.x);
  console.log("Y:" + coordinates.y);

  coordinates.visible = false;
  */


if (count < 10){
spawnRabbit();
console.log(rabbitGroup.velocityX);
}


 // time variable
 time = second();
 
 
// make ground collide with player
  player.collide(ground1);
  player.collide(ground2);
  player.collide(ground3);

  
  // making the player jump
  if(keyWentDown("space")){
    player.velocity.y = -15;
  }
  player.velocity.y = player.velocity.y + 1;


//make the player move right and left

/*find animation*/

// make player move right
  if (keyDown("d")){
    player.x = player.x+10;
    player.addImage(player1R);

  }

  // make player move left
  if (keyDown("a")){
    player.x = player.x-10;
    player.addImage(player1L);
  }

  

// draw sprites
  drawSprites()


}

// called on line 134
function spawnRabbit(){
  if (World.frameCount % 100 === 0){
    count = count+1;
    var rabbit = createSprite(displayWidth, 570);
    rabbit.addImage(obstacle1L);
    rabbit.scale = 0.2
    rabbit.velocityX = -2;
    console.log(rabbit.x);
    
    
    rabbit.collide(ground1);
    rabbit.collide(ground3);
    if (rabbit.collide(ground2)){

    if( rabbit.x > 850){
      rabbit.velocityX = 2
      rabbit.addImage(obstacle1R);
      rabbit.scale = 0.2;
    }
    else if (rabbit.x > displayWidth){
      rabbit.x = 0;
      rabbit.velocityX = 2
      rabbit.addImage(obstacle1R);
      rabbit.scale = 0.2;
    }

    if (rabbit.x < 280){
      rabbit.addImage(obstacle1L);
      rabbit.scale = 0.2;
      rabbit.velocityX = -2;
    }

    else if (rabbit.x < 0){
      rabbit.x =  displayWidth - 30
      rabbit.addImage(obstacle1L);
      rabbit.scale = 0.2;
      rabbit.velocityX = -2;
    }
    }

  
    rabbitGroup.add(rabbit);
  }
  
}