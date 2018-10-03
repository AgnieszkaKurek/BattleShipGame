import { LetterGenerator } from '../src/letterGenerator';

describe('LetterGenerator', () => {
    let letterGenerator;

    beforeEach(() => {
        letterGenerator = new LetterGenerator();
    });

    it('When letter possition is 0 than we get letter A', () => {
        expect(letterGenerator.generateUppercaseLetter(0)).toEqual('A');
    });

    it('When letter possition is 9 than we get letter J', () => {
        expect(letterGenerator.generateUppercaseLetter(9)).toEqual('J');
    });
});