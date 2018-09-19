import $ from 'jquery';

export class BoardRenderer {
    constructor() {
        this.numberOfRowsAndColumns = 10;
    }

    initBoard() {

        let rows = '';
        for (let rowIndex = 0; rowIndex < this.numberOfRowsAndColumns + 1; rowIndex++) {
            let columns = '';
            for (let columnIndex = 0; columnIndex < this.numberOfRowsAndColumns + 1; columnIndex++) {
                let state = 'basic-box';
                if (columnIndex === 0 && rowIndex === 0) {
                    state = 'invisible-box';
                }
                else if (columnIndex === 0 || rowIndex === 0) {
                    state = 'box-header';
                }
                columns += `<td class ='box' data-position-row="${rowIndex}" data-position-column="${columnIndex}" data-state="${state}"></td>`;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }
} 