import $ from 'jquery';
import { LetterGenerator } from './letterGenerator';

export class BoardRenderer {
    constructor(letterGenerator = new LetterGenerator()) {
        this._numberOfRowsAndColumns = 10;
        this._letterGenerator = letterGenerator;
    }

    initBoard() {
        let rows = '';
        for (let rowIndex = 0; rowIndex < this._numberOfRowsAndColumns + 1; rowIndex++) {
            let columns = '';
            for (let columnIndex = 0; columnIndex < this._numberOfRowsAndColumns + 1; columnIndex++) {
                let state = 'basic-box';
                let headlines = '';
                if (columnIndex === 0 && rowIndex === 0) {
                    state = 'invisible-box';
                }
                else if (rowIndex === 0) {
                    state = 'box-header';
                    headlines = this._letterGenerator.generateUppercaseLetter(columnIndex - 1);
                }
                else if (columnIndex === 0) {
                    state = 'box-header';
                    headlines = rowIndex;
                }
                const cell = `<td class ='box'
                    data-position-row="${rowIndex}"
                    data-position-column="${columnIndex}"
                    data-state="${state}">${headlines}
                    </td>`;
                columns += cell;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }
} 