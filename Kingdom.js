module.exports = class Kingdom {
    constructor(name, emblem){
        this.name = name.toLowerCase(),
        this.emblem = emblem.toLowerCase()
    }

    isImpressed(message){
        let lowerCaseMessage = message.toLowerCase();
        
        for(const letter of this.emblem){
            if(lowerCaseMessage.indexOf(letter) == -1){
                return false;
            }

            lowerCaseMessage = lowerCaseMessage.replace(letter, '');
        }
        return true;
    }
}