export class BattleShipGame {

 constructor(){
        this.creatBoard();
    }
 creatBoard(){
    this.board = [...Array(10)].map(x=>Array(10).fill(0));
     
    }
} 