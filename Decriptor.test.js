const Decriptor = require('./Decriptor');

describe('Decriptor', () => {
    const DECRYPTION_KEY = 5;
    const decriptor = new Decriptor();

    it('should be able to convert f to a for key 5', () => {
        const decriptedLetter = decriptor.decriptWord('f', DECRYPTION_KEY);

        expect(decriptedLetter).toEqual('a');
    });

    it('should be able to convert b to w for key 5', () => {
        const decriptedLetter = decriptor.decriptWord('b', DECRYPTION_KEY);

        expect(decriptedLetter).toEqual('w');
    });

    it('should be able to convert owl to jrg for key 5', () => {
        const decriptedLetter = decriptor.decriptWord('owl', DECRYPTION_KEY);

        expect(decriptedLetter).toEqual('jrg');
    });
});