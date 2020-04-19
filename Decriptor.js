const ASCII_OF_a = 97;
const TOTAL_NUMBER_OF_LETTERS = 26;

module.exports = class Decriptor{
    constructor(){}

    decryptLetter(positionOfEncryptedLetter, decryptionKey) {
        return (positionOfEncryptedLetter + TOTAL_NUMBER_OF_LETTERS - decryptionKey) % TOTAL_NUMBER_OF_LETTERS;
    }

    getPositionOfEncryptedLetterInLetterSequence(encryptedLetter){
        const asciiOfEncryptedLetter = encryptedLetter.charCodeAt(0);
        return asciiOfEncryptedLetter - ASCII_OF_a;
    }

    getDecryptedLetter(encryptedLetter, decryptionKey){
        const positionOfEncryptedLetter = this.getPositionOfEncryptedLetterInLetterSequence(encryptedLetter);        
        const positionOfDecryptedLetter = this.decryptLetter(positionOfEncryptedLetter, decryptionKey);
        const asciiOfDecryptedLetter = positionOfDecryptedLetter + ASCII_OF_a;
        return String.fromCharCode(asciiOfDecryptedLetter);
    }

    decriptWord(word, decryptionKey){
        let decriptedWord = '';
        for(const letter of word){
            const decryptedLetter = this.getDecryptedLetter(letter, decryptionKey);

            decriptedWord = decriptedWord + decryptedLetter;
        }
        return decriptedWord;
    }
}