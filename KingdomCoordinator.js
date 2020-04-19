const Kingdom = require('./Kingdom');
const Decryptor = require('./Decriptor');

module.exports = class KingdomCoordinator {
    constructor(inputParser){
        const decryptor = new Decryptor();
        this.inputParser = inputParser;
        this.kingdomInstanceMap = new Map()
            .set('space', new Kingdom('space', 'gorilla', decryptor))
            .set('land', new Kingdom('land', 'panda', decryptor))
            .set('air', new Kingdom('air', 'owl', decryptor))
            .set('ice', new Kingdom('ice', 'mammoth', decryptor))
            .set('water', new Kingdom('water', 'octopus', decryptor))
            .set('fire', new Kingdom('fire', 'dragon', decryptor));
    }

    showResult(sender, impressedKingdoms) {
        if(impressedKingdoms.length >= 3){
            console.log(`${sender} ${impressedKingdoms.join(' ')}`);
            return;
        }
        console.log('NONE');
    }

    checkAndShowRuler(sender, kingdomAndMessageInputString) {
        const impressedKingdoms = [];
        const {recieverKingdoms, messages} = this.inputParser.parse(kingdomAndMessageInputString)
        recieverKingdoms.forEach((recieverKingdom, index) => {
            const recieverKingdomInstance = this.kingdomInstanceMap.get(recieverKingdom.toLowerCase());
            if(recieverKingdomInstance.isImpressed(messages[index])){
                impressedKingdoms.push(recieverKingdom);
            }
        });
        const uniqueImpressedKingdoms = Array.from(new Set(impressedKingdoms));
        this.showResult(sender, uniqueImpressedKingdoms);
    }
}