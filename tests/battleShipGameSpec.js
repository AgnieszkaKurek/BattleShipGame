
import  {BattleShipGame} from './../src/battleShipGame.js';

describe('BattleShipGame', () => {
    let game;
    beforeEach(() => {
        game = new BattleShipGame();
    });
    it('Given game, when game begins, then contains a board', () => {
       
        expect(game.board).toBeDefined();
    });

});