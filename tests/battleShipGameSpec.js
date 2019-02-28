
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
        expect(game.board[0][0]).toEqual(BattleShipBoxStatus.EmptyNotHit);
    });
});