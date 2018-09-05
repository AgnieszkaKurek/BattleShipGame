import $ from 'jquery';
export class BoardRenderer {
    constructor() {

    }

    initBoard() {
        let table = '';
        table += '<table ></table>';
        $('#board').html(table);
        let tr = '';
        for (let i = 0; i < 10; i++) {
            tr += '<tr></tr>';
            $('table').html(tr);
            let td = '';
            for (let j = 0; j < 10; j++) {
                td += '<td></td>';
                $('tr').html(td);
            }
        }
    }
}