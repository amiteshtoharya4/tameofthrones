const Kingdom = require('./Kingdom');

describe('Kingdom', () => {
    const decriptor = {
        decriptWord: jest.fn()
    };

    it('space kingdom  with emblem gorilla mshould get impressed with message containing all letters in gorilla with case insensitivity', () => {
        const decriptedMessage = 'asdfasgaorilla';        
        decriptor.decriptWord.mockImplementation(() => decriptedMessage);
        const emblemLength = 7;
        const spaceKingdom = new Kingdom('space', 'Gorilla', decriptor);
        const message = 'hzkmhzNHVypssh';

        const result = spaceKingdom.isImpressed(message);

        expect(result).toEqual(true);
        expect(decriptor.decriptWord).toHaveBeenCalledWith(message.toLowerCase(), emblemLength);
    });

    it('space kingdom with emblem gorilla should not get impressed when message does not have all letters in gorilla', () => {
        const decriptedMessage = 'asdfasgaorila';   
        const emblemLength = 8;
        decriptor.decriptWord.mockImplementation(() => decriptedMessage);
        const spaceKingdom = new Kingdom('space', 'Gorillas', decriptor);
        const message = 'hzkmhzNHVypsh';

        const result = spaceKingdom.isImpressed(message);

        expect(result).toEqual(false);
        expect(decriptor.decriptWord).toHaveBeenCalledWith(message.toLowerCase(), emblemLength);
    });
});