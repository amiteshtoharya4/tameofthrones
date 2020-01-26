const Decriptor = require('./Decriptor');

describe('Decriptor', () => {
    const SENDER = 'mohan';
    const decriptor = new Decriptor(SENDER);

    it('should be able to convert f to a for mohan', () => {
        const decriptedLetter = decriptor.decriptWord('f');

        expect(decriptedLetter).toEqual('a');
    });

    it('should be able to convert b to w for mohan', () => {
        const decriptedLetter = decriptor.decriptWord('b');

        expect(decriptedLetter).toEqual('w');
    });

    it('should be able to convert owl to jrg for mohan', () => {
        const decriptedLetter = decriptor.decriptWord('owl');

        expect(decriptedLetter).toEqual('jrg');
    });
});