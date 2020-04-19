module.exports = class InputParser{
    contructor(){}

    parse(inputString) {
        const inputLines = inputString.split('\n');
        let recieverKingdoms = [];
        let messages = [];
        inputLines.forEach((line) => {
            if(line == ''){
                return;
            }
            const kingdomAndMessageMap = line.split(' ');
            recieverKingdoms.push(kingdomAndMessageMap[0]);
            kingdomAndMessageMap.shift();
            messages.push(kingdomAndMessageMap.join(' '));
        });
        return {recieverKingdoms, messages};
    }
}