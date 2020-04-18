const Kingdom = require('./Kingdom');
describe('Kingdom', () => {
    it('space kingdom  with emblem gorilla mshould get impressed with message containing all letters in gorilla with case insensitivity', () => {
        const spaceKingdom = new Kingdom('space', 'Gorilla');
        const message = 'asdfasGAOrilla';

        const result = spaceKingdom.isImpressed(message);

        expect(result).toEqual(true);
    });

    it('space kingdom with emblem gorilla should not get impressed when message does not have all letters in gorilla', () => {
        const spaceKingdom = new Kingdom('space', 'Gorilla');
        const message = 'asdfasGAOrila';

        const result = spaceKingdom.isImpressed(message);

        expect(result).toEqual(false);
    });
});