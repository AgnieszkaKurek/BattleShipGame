import { BattleShipGameRenderer } from './battleShipGameRenderer.js';
import { LetterGenerator } from './letterGenerator.js';

export function BattleShipGameInitializer() {
    const letterGenerator = new LetterGenerator();
    const battleShipGameRenderer = new BattleShipGameRenderer(letterGenerator);
    battleShipGameRenderer.initBoard();
}

