import $ from 'jquery';
export class BoardRenderer {
    constructor() {
        this.numberOfElements = 11;
    }

    initBoard() {
        let tableConstructor = '';
        let columns = '';
        for (let i = 0; i < this.numberOfElements; i++) {
            tableConstructor += `<tr>${columns}</tr>`;
            columns = '<td></td>';
            columns = columns.repeat(this.numberOfElements);
        }
        let table = `<table>${tableConstructor}</table>`;
        $('#board').html(table);
    }
} 