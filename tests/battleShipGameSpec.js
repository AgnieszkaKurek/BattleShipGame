
import { BattleShipGame } from './../src/battleShipGame.js';

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
    it('Given game, when game begins, then board is of 9 empty elements', () => {
        expect(game.board).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);

    });
});