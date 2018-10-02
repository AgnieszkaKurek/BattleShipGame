
export class AlphabetBuilder {
    constructor() {
        this._unicodeNumber = 65;//todo: rename, it should be private
    }

    getStringOfLetters(stringLength) {//todo: rename it
        return [...Array(stringLength).keys()].map(i => String.fromCharCode(i + this._unicodeNumber));

    }
}