const KingdomCoordinator = require('./KingdomCoordinator');
const Decryptor = require('./Decriptor');
const Kingdom = require('./Kingdom');

jest.mock('./Decriptor.js');
jest.mock('./Kingdom');

describe('Kingdom Coordinator', () => {
    beforeAll(() => {
        decryptorMock = {
            decriptWord: jest.fn()
        };
        spaceKingdomMock = {
            isImpressed: jest.fn()
        };
        iceKingdomMock = {
            isImpressed: jest.fn()
        };
        fireKingdomMock = {
            isImpressed: jest.fn()
        };
        airKingdomMock = {
            isImpressed: jest.fn()
        };
        landKingdomMock = {
            isImpressed: jest.fn()
        };
        waterKingdomMock = {
            isImpressed: jest.fn()
        };
        Kingdom.mockImplementation((name) => {
            switch(name){
                case 'space':
                    return spaceKingdomMock;
                case 'water':
                    return waterKingdomMock;
                case 'ice':
                    return iceKingdomMock;
                case 'air':
                    return airKingdomMock;
                case 'land':
                    return landKingdomMock;
                case 'fire':
                    return fireKingdomMock;
            }
        });
        Decryptor.mockImplementation(() => decryptorMock);
        kingdomCoordinator = new KingdomCoordinator();
    });

    beforeEach(() => {
        consoleSpy = jest.spyOn(global.console, 'log');
        fireKingdomMock.isImpressed.mockImplementation(() => true);
        spaceKingdomMock.isImpressed.mockImplementation(() => true);
        waterKingdomMock.isImpressed.mockImplementation(() => true);
        iceKingdomMock.isImpressed.mockImplementation(() => true);
        airKingdomMock.isImpressed.mockImplementation(() => true);
        landKingdomMock.isImpressed.mockImplementation(() => true);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should intialize all 6 kingdom with decriptor', () => {
        expect(Decryptor).toHaveBeenCalled();
        expect(Kingdom).toHaveBeenCalledWith('space', 'gorilla', decryptorMock);
        expect(Kingdom).toHaveBeenCalledWith('land', 'panda', decryptorMock);
        expect(Kingdom).toHaveBeenCalledWith('water', 'octopus', decryptorMock);
        expect(Kingdom).toHaveBeenCalledWith('ice', 'mammoth', decryptorMock);
        expect(Kingdom).toHaveBeenCalledWith('air', 'owl', decryptorMock);
        expect(Kingdom).toHaveBeenCalledWith('fire', 'dragon', decryptorMock);
    });

    it('should print ruler with allys if more than 2 kingdoms are impressed', () => {
        fireKingdomMock.isImpressed.mockImplementation(() => false);
        iceKingdomMock.isImpressed.mockImplementation(() => false);
        const messages = ['asdfasdf', 'asdfasdf', 'SADAS', 'dsa', 'fdsa'];
        const recieverKingdoms = ['fire', 'ice', 'Water', 'land', 'air'];

        kingdomCoordinator.checkAndShowRuler('SPACE', recieverKingdoms, messages);

        expect(fireKingdomMock.isImpressed).toHaveBeenCalledWith(messages[0]);
        expect(iceKingdomMock.isImpressed).toHaveBeenCalledWith(messages[1]);
        expect(waterKingdomMock.isImpressed).toHaveBeenCalledWith(messages[2]);
        expect(landKingdomMock.isImpressed).toHaveBeenCalledWith(messages[3]);
        expect(airKingdomMock.isImpressed).toHaveBeenCalledWith(messages[4]);
        expect(consoleSpy).toHaveBeenCalledWith('SPACE Water land air');
    });

    it('should print NONE if less than 3 kingdoms are impressed', () => {
        fireKingdomMock.isImpressed.mockImplementation(() => false);
        iceKingdomMock.isImpressed.mockImplementation(() => false);
        airKingdomMock.isImpressed.mockImplementation(() => false);
        landKingdomMock.isImpressed.mockImplementation(() => false);
        const messages = ['asdfasdf', 'asdfasdf', 'SADAS', 'dsa', 'fdsa'];
        const recieverKingdoms = ['fire', 'ice', 'Water', 'land', 'air'];

        kingdomCoordinator.checkAndShowRuler('SPACE', recieverKingdoms, messages);

        expect(fireKingdomMock.isImpressed).toHaveBeenCalledWith(messages[0]);
        expect(iceKingdomMock.isImpressed).toHaveBeenCalledWith(messages[1]);
        expect(waterKingdomMock.isImpressed).toHaveBeenCalledWith(messages[2]);
        expect(landKingdomMock.isImpressed).toHaveBeenCalledWith(messages[3]);
        expect(airKingdomMock.isImpressed).toHaveBeenCalledWith(messages[4]);
        expect(consoleSpy).toHaveBeenCalledWith('NONE');
    });
});