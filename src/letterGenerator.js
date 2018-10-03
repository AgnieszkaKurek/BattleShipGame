
export class LetterGenerator {
    constructor() {
        this._unicodeValueforA = 65;
    }

    generateUppercaseLetter(letterPosition) {
        return String.fromCharCode(this._unicodeValueforA + letterPosition);
    }
}