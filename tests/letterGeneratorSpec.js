import { LetterGenerator } from '../src/letterGenerator';

describe('LetterGenerator', () => {
    let letter;
    
    beforeEach(() => {
        letter = new LetterGenerator();
    });

    it('When letter possition is 0 than we get letter A', () => {
        expect(letter.generateUppercaseLetter(0)).toEqual('A');
    });
    
    it('When letter possition is 9 than we get letter J', () => {
        expect(letter.generateUppercaseLetter(9)).toEqual('J');
    });
});