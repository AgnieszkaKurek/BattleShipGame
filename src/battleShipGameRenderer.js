import $ from 'jquery';

export class BattleShipGameRenderer {
    constructor(letterGenerator) {
        this._numberOfRowsAndColumns = 10;
        this._letterGenerator = letterGenerator;
    }

    initBoard() {
        this._createBoard();
        this._appendToEventHandlers();
    }

    _createBoard() {
        let rows = '';
        for (let rowIndex = 0; rowIndex < this._numberOfRowsAndColumns + 1; rowIndex++) {
            let columns = '';
            for (let columnIndex = 0; columnIndex < this._numberOfRowsAndColumns + 1; columnIndex++) {
                let cellState = 'basic-box';
                let initialCellContent = '';
                if (columnIndex === 0 && rowIndex === 0) {
                    cellState = 'invisible-box';
                }
                else if (rowIndex === 0) {
                    cellState = 'box-header';
                    initialCellContent = this._letterGenerator.generateUppercaseLetter(columnIndex - 1);
                }
                else if (columnIndex === 0) {
                    cellState = 'box-header';
                    initialCellContent = rowIndex.toString();
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
        $('.box').mouseenter((e) => {
            const box = $(e.target);
            const row = box.attr('data-position-row');
            const column = box.attr('data-position-column');
            console.log(`row ${row}, column ${column}`);
        });
    }

}

