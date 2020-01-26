const Decriptor = require('./Decriptor');

describe('Decriptor', () => {
    const SENDER = 'mohan';
    const decriptor = new Decriptor(SENDER);

    it('should be able to convert f to a for mohan', () => {
        const decriptedLetter = decriptor.decriptLetter('f');

        expect(decriptedLetter).toEqual('a');
    });

    it('should be able to convert b to w for mohan', () => {
        const decriptedLetter = decriptor.decriptLetter('b');

        expect(decriptedLetter).toEqual('w');
    });
});