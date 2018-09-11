import $ from 'jquery';

export class BoardRenderer {
    constructor() {
        this.numberOfRowsAndColumns = 10;
    }

    initBoard() {
        let rows = '';
        for (let rowIndex = 0; rowIndex < this.numberOfRowsAndColumns; rowIndex++) {
            let columns = '';
            for (let columnIndex = 0; columnIndex < this.numberOfRowsAndColumns; columnIndex++) {
                columns += `<td data-position-row="${rowIndex}" data-position-column="${columnIndex}"></td>`;
            }
            rows += `<tr>${columns}</tr>`;
        }
        $('#board').html(`<table>${rows}</table>`);
    }
} 