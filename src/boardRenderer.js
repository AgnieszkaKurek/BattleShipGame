export class BoardRenderer {
    constructor() {

    }

    initBoard() {
        const body = document.getElementsByTagName('body')[0];//todo: use jquery here
        const table = document.createElement('table');
        //const tableConstruction = document.createElement('tableConstruction');//todo: it is not needed here as it is invalid html tag
       // table.appendChild(tableConstruction);
        for (let i = 0; i < 10; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 0; j < 10; j++) {
                const td = document.createElement('td');
                tr.appendChild(td);
            }
        }
        body.appendChild(table);
    }
}