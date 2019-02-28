export class BattleShipGame {
 
    constructor() {
        this.board = [...Array(10)].map(() => Array(10).fill(0));
    }
    // 0 - empty box, not click; 
    // 1 - empty box, click;
    // 2 - box with the ship, not click;
    // 3 - box with the ship, click;
} 