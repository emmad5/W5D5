const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  run() {
    // until one of the towers, other than the first, has three discs 
      // get move from player
      // check if move is valid (the disc they are pushing can not be greater than 
      // the disc at the last position of the tower they are pushing onto)  
      // if move is valid, pop disc from start tower and push onto end tower
      // (get move from player will include start tower and end tower)
      let callback = (var1, var2) => [var1, var2]; 
      this.promptMove(callback);
      // this.isValidMove(moveArray[0], moveArray[1]);
    }
   constructor() {
    this.towers = [[3,2,1],[],[]];
  }
  promptMove (callback) {
    console.log(this.towers);
    reader.question ("which stack do you want to move from/to (i.e. 0, 1)?  ", function (move){
      let array = move.split(", ");
      let startTower = array[0];
      let endTower = array[1];
      callback(startTower, endTower);       
    });
  }
  isValidMove(startTowerIdx, endTowerIdx) {
    startTower = this.towers[startTowerIdx];
    endTower = this.towers[endTowerIdx];
    
    if (startTower[-1] > endTower[-1]) {
      return false;
    } else if (startTower.length > 0 && endTower.length === 0) {
      return true;
    } else if (startTower[-1] < endTower[-1]) {
      return true;
    } else {
      return false;
    }
  }  
  
  
}

let game = new Game();
game.run();

  
  


  
