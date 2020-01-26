const ASCII_OF_a = 97;
const NUMBER_OF_LETTERS = 26;

module.exports = class Decriptor{
    constructor(sender){
        this.key = sender.length;
    }

    decriptWord(word){
        let decriptedWord = '';
        for(const letter of word){
            const asciiOfEncryptedLetter = letter.charCodeAt(0);
            const encryptedLetter = asciiOfEncryptedLetter - ASCII_OF_a;

            const decryptedLetter = (encryptedLetter + NUMBER_OF_LETTERS - this.key) % NUMBER_OF_LETTERS;
            const asciiOfDecryptedLetter = decryptedLetter + ASCII_OF_a;

            decriptedWord = decriptedWord + String.fromCharCode(asciiOfDecryptedLetter);
        }
        return decriptedWord;
    }
}