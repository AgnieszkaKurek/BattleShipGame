import $ from 'jquery';
import { AlphabetBuilder } from './alphabetBuilder';

export class BoardRenderer {
    constructor(alphabetBuilder = new AlphabetBuilder()) {
        this._numberOfRowsAndColumns = 10;//todo: rename to private
        this._alphabetBuilder = alphabetBuilder;//todo: rename to private
    }

    initBoard() {
        const letters = this._alphabetBuilder.getStringOfLetters(this._numberOfRowsAndColumns);
        let rows = '';
        let rowMark;
        for (let rowIndex = 0; rowIndex < this._numberOfRowsAndColumns + 1; rowIndex++) {
            let columns = '';
            for (let columnIndex = 0; columnIndex < this._numberOfRowsAndColumns + 1; columnIndex++) {
                let state = 'basic-box';
                if (columnIndex === 0 && rowIndex === 0) {
                    state = 'invisible-box';
                    rowMark = '';

                }
                else if (columnIndex === 0 ) {
                    state = 'box-header';
                    rowMark = letters.shift();
                }
                else if (rowIndex === 0){
                    state = 'box-header';
                }
                else if (columnIndex != 0 & rowIndex != 0) {
                    rowMark = '';
                }

                const cell = `<td class ='box'
                    data-position-row="${rowIndex}"
                    data-position-column="${columnIndex}"
                    data-state="${state}">${rowMark}
                    </td>`;
                columns += cell;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }
} 