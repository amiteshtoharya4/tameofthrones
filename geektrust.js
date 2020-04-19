const fs = require('fs');
const KingdomCoordinator = require('./KingdomCoordinator');
const InputParser = require('./InputParser');

const inputParser = new InputParser();
const kingdomCoordinator = new KingdomCoordinator(inputParser);

const inputFile = process.argv[2];
const inputString = fs.readFileSync(inputFile).toString();

kingdomCoordinator.checkAndShowRuler('SPACE', inputString);