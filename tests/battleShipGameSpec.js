
import { BattleShipGame } from './../src/battleShipGame.js';

describe('BattleShipGame', () => {
    let game;
    beforeEach(() => {
        game = new BattleShipGame();
    });
    it('Given created game, when getting its instance, then it is defined', () => {
        expect(game).toBeDefined();
    });

});