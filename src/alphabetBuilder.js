
export class AlphabetBuilder {
    constructor() {
        this.unicodeNumber = 65;
    }

    getStringOfLetters(numberOfRowsAndColumns) {
        return  [...Array(numberOfRowsAndColumns).keys()].map(i => String.fromCharCode(i + this.unicodeNumber));
       
    }
}