const readline = require('readline');
const fs = require('fs');
const KingdomCoordinator = require('./KingdomCoordinator');

const kingdomCoordinator = new KingdomCoordinator();
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.on('line', (line => {
    const inputString = fs.readFileSync(line).toString();
    const inputLines = inputString.split('\n');
    let recieverKingdoms = [];
    let messages = [];
    inputLines.forEach((line) => {
        const kingdomAndMessageMap = line.split(' ');
        recieverKingdoms.push(kingdomAndMessageMap[0]);
        messages.push(kingdomAndMessageMap[1])
    });
    kingdomCoordinator.showResult('SPACE', recieverKingdoms, messages);
}));