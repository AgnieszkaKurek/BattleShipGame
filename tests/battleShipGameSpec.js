
import { BattleShipGame } from './../src/battleShipGame.js';
import { BattleShipBoxStatus } from '../src/battleShipBoxStatus.js';

describe('BattleShipGame', () => {
    let game;
    
    beforeEach(() => {
        game = new BattleShipGame();
    });

    it('Given created game, when getting its instance, then it is defined', () => {
        expect(game).toBeDefined();
    });

    it('Given game, when game begins, then contains a board', () => {
        expect(game.board).toBeDefined();
    });

    it('Given game, when game begins, then board has 10 rows', () => {
        expect(game.board.length).toEqual(10);
    });

    it('Given game, when game begins, then board has 10 columns in a row', () => {
        expect(game.board[0].length).toEqual(10);
    });

    it('Given game, when game begins, then board boxes are empty', () => {
        expect(game.getBoxStatus(0, 0)).toEqual(BattleShipBoxStatus.EmptyNotHit);
    });

    it('When a player clicks on the box, the status of the box changes', () => {
       game.getBoxStatus(0);
        expect(game.setShip(0, 0)).toEqual(BattleShipBoxStatus.ShipNotHit);
    });
});