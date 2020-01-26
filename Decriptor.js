module.exports = class Decriptor{
    constructor(sender){
        this.key = sender.length;
    }

    decriptLetter(letter){
        const ascii = letter.charCodeAt(0) - 97;
        return String.fromCharCode((ascii + 26 - this.key) % 26 + 97);
    }
}