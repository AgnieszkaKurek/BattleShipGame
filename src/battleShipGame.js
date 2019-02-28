import { BattleShipBoxStatus } from './battleShipBoxStatus';
export class BattleShipGame {

    constructor() {
        this.board = [...Array(10)].map(() => Array(10).fill(BattleShipBoxStatus.EmptyNotHit));
    }
} 