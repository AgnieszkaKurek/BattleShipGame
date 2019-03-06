import $ from 'jquery';
import { BattleShipBoxStatus } from './battleShipBoxStatus.js';

export class BattleShipGameRenderer {
    constructor(letterGenerator, game) {
        this._numberOfRowsAndColumns = 10;
        this._letterGenerator = letterGenerator;
        this._game = game;
    }

    initBoard() {
        this._createBoard();
        this._appendToEventHandlers();
    }

    _createBoard() {
        let rows = '';
        const startingValue = -1;
        for (let rowIndex = startingValue; rowIndex < this._numberOfRowsAndColumns; rowIndex++) {
            let columns = '';
            for (let columnIndex = startingValue; columnIndex < this._numberOfRowsAndColumns; columnIndex++) {
                let cellState = 'empty-not-hit';
                let initialCellContent = '';
                if (columnIndex === startingValue && rowIndex === startingValue) {
                    cellState = 'invisible-box';
                }
                else if (rowIndex === startingValue) {
                    cellState = 'box-header';
                    initialCellContent = this._letterGenerator.generateUppercaseLetter(columnIndex);
                }
                else if (columnIndex === startingValue) {
                    cellState = 'box-header';
                    initialCellContent = (rowIndex + 1).toString();
                }
                columns += `<td class ='box'
                                    data-position-row="${rowIndex}"
                                    data-position-column="${columnIndex}"
                                    data-state="${cellState}">${initialCellContent}</td>`;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }

    _appendToEventHandlers() {
        $('.box').click((e) => {
            const box = $(e.target);
            const row = parseInt(box.attr('data-position-row'));
            const column = parseInt(box.attr('data-position-column'));
            if (row === -1 || column === -1) return;
            const status = this._game.setShip(row, column);
            box.attr('data-state', this._getVisualBoxStatus(status));
        });
    }

    _getVisualBoxStatus(status){
        switch (status) {
            case BattleShipBoxStatus.ShipNotHit: return 'ship-not-hit';
            case BattleShipBoxStatus.ShipHit: return 'ship-hit';
            case BattleShipBoxStatus.EmptyNotHit: return 'empty-not-hit';
            case BattleShipBoxStatus.EmptySurroundingHitShip: return 'epty-surrounding-hit-ship';
            default: return 'empty-not-hit';
        }
    }
}
