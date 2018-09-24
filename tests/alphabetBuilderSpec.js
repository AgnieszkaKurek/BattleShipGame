import { AlphabetBuilder } from '../src/alphabetBuilder';

describe('AlphabetBuilder', () => {
    let alphabet;
    
    beforeEach(() => {
        alphabet = new AlphabetBuilder();
    });

    it('Given alphabet gives you an array of uppercase letters(number of letters is  equal numberOfRowsAndColumns)', () => {
        expect(alphabet.getStringOfLetters(10)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']);
    });
});