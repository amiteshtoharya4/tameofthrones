const ASCII_OF_a = 97;
const TOTAL_NUMBER_OF_LETTERS = 26;

module.exports = class Decriptor{
    constructor(sender){
        this.decryptionKey = sender.length;
    }

    decryptLetter(positionOfEncryptedLetter) {
        return (positionOfEncryptedLetter + TOTAL_NUMBER_OF_LETTERS - this.decryptionKey) % TOTAL_NUMBER_OF_LETTERS;
    }

    getPositionOfEncryptedLetterInLetterSequence(encryptedLetter){
        const asciiOfEncryptedLetter = encryptedLetter.charCodeAt(0);
        return asciiOfEncryptedLetter - ASCII_OF_a;
    }

    getDecryptedLetter(encryptedLetter){
        const positionOfEncryptedLetter = this.getPositionOfEncryptedLetterInLetterSequence(encryptedLetter);        
        const positionOfDecryptedLetter = this.decryptLetter(positionOfEncryptedLetter);
        const asciiOfDecryptedLetter = positionOfDecryptedLetter + ASCII_OF_a;
        return String.fromCharCode(asciiOfDecryptedLetter);
    }

    decriptWord(word){
        let decriptedWord = '';
        for(const letter of word){
            const decryptedLetter = this.getDecryptedLetter(letter);

            decriptedWord = decriptedWord + decryptedLetter;
        }
        return decriptedWord;
    }

    
}