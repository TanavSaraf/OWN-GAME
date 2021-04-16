var db
var gameState=0,playerCount,allPlayers;
var game,player,form;
var player1,player2;
var player1T,player2T

function setup() {
  createCanvas(800,400);
  db=firebase.database();
  game=new Game()
  game.getGameState()
  game.start()

}

function draw() {
  if(playerCount===2)
  {
    gameState=1;
    
  }
  if(gameState===1)
  {
    clear()
    game.play();
  }
  
}