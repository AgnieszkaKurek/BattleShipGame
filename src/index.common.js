import { BattleShipGameRenderer } from './battleShipGameRenderer.js';
import { LetterGenerator } from './letterGenerator.js';
import { BattleShipGame } from './battleShipGame.js';

export function BattleShipGameInitializer() {
    const game = new BattleShipGame();
    const letterGenerator = new LetterGenerator();
    const battleShipGameRenderer = new BattleShipGameRenderer(letterGenerator, game);
    battleShipGameRenderer.initBoard();
}
