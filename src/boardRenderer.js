import $ from 'jquery';

export class BoardRenderer {
    constructor() {
        this.numberOfRowsAndColumns = 10;
    }

    initBoard() {
        let rows = '';
        for (let rowIndex = 0; rowIndex < this.numberOfRowsAndColumns + 1; rowIndex++) {
            let columns = '';
            let state;
            for (let columnIndex = 0; columnIndex < this.numberOfRowsAndColumns + 1; columnIndex++) {
                if (columnIndex === 0 && rowIndex === 0) {
                    state = 'invisibleBox';
                }
                else if (columnIndex === 0 || rowIndex === 0) {
                    state = 'boxHeader';
                }
                else {
                    state = 'basicBox';
                }
                columns += `<td data-position-row="${rowIndex}" data-position-column="${columnIndex}" data-state= "${state}"></td>`;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }
} 