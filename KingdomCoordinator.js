const Kingdom = require('./Kingdom');
const Decryptor = require('./Decriptor');

module.exports = class KingdomCoordinator {
    constructor(){
        const decryptor = new Decryptor();
        this.kingdomInstanceMap = new Map()
            .set('space', new Kingdom('space', 'gorilla', decryptor))
            .set('land', new Kingdom('land', 'panda', decryptor))
            .set('air', new Kingdom('air', 'owl', decryptor))
            .set('ice', new Kingdom('ice', 'mammoth', decryptor))
            .set('water', new Kingdom('water', 'octopus', decryptor))
            .set('fire', new Kingdom('fire', 'dragon', decryptor));
    }

    checkAndShowRuler(sender, recieverKingdoms, messages) {
        const impressedKingdoms = [];
        recieverKingdoms.forEach((recieverKingdom, index) => {
            const recieverKingdomInstance = this.kingdomInstanceMap.get(recieverKingdom.toLowerCase());
            if(recieverKingdomInstance.isImpressed(messages[index])){
                impressedKingdoms.push(recieverKingdom);
            }
        });
        if(impressedKingdoms.length >= 3){
            console.log(`${sender} ${impressedKingdoms.join(' ')}`);
            return;
        }
        console.log('NONE');
    }
}