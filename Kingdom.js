module.exports = class Kingdom {
    constructor(name, emblem, decriptor){
        this.name = name.toLowerCase(),
        this.emblem = emblem.toLowerCase(),
        this.decriptor = decriptor
    }

    isImpressed(message){
        let lowerCaseMessage = message.toLowerCase();
        let decriptedMessage = this.decriptor.decriptWord(lowerCaseMessage);
        
        for(const letter of this.emblem){
            if(decriptedMessage.indexOf(letter) == -1){
                return false;
            }

            decriptedMessage = decriptedMessage.replace(letter, '');
        }
        return true;
    }
}