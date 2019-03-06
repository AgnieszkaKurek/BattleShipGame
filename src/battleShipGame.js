import { BattleShipBoxStatus } from './battleShipBoxStatus';

export class BattleShipGame {
    constructor() {
        this.board = [...Array(10)].map(() => Array(10).fill(BattleShipBoxStatus.EmptyNotHit));
    }

    getBoxStatus(row, column) {
        return this.board[row][column];
    }

    setShip(row, column) {
        const currentStatus = this.getBoxStatus(row, column);
        if (currentStatus === BattleShipBoxStatus.ShipNotHit || currentStatus === BattleShipBoxStatus.EmptyNotHit) {
            const newStatus = currentStatus === BattleShipBoxStatus.ShipNotHit ? BattleShipBoxStatus.EmptyNotHit : BattleShipBoxStatus.ShipNotHit;
            this.board[row][column] = newStatus;
            return newStatus;
        } else {
            return currentStatus;
        }
    }
} 