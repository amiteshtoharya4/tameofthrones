const InputParser = require('./InputParser');

describe('Input Parser', () => {
    beforeAll(() => {
        inputParser = new InputParser();
    });

    it('should parse string into reciever kingdoms and messages', () => {
        const inputString = 'asadf asdfdsfdsa\nasdfaqwer asdfd\nfds f';
        const expectedParsedResult = {recieverKingdoms: ['asadf', 'asdfaqwer', 'fds'],messages: ['asdfdsfdsa', 'asdfd', 'f']};

        const parsedResult = inputParser.parse(inputString);

        expect(parsedResult).toEqual(expectedParsedResult);
    });

    it('should parse string with empty lines into reciever kingdoms and messages', () => {
        const inputString = 'asadf asdfdsfdsa\nasdfaqwer asdfd\n\n\nfds f';
        const expectedParsedResult = {recieverKingdoms: ['asadf', 'asdfaqwer', 'fds'],messages: ['asdfdsfdsa', 'asdfd', 'f']};

        const parsedResult = inputParser.parse(inputString);

        expect(parsedResult).toEqual(expectedParsedResult);
    });

    it('should parse string with multiple messages separated with space into reciever kingdoms and messages', () => {
        const inputString = 'asadf asdfdsfdsa\nasdfaqwer asdfd fdsasd\n\n\nfds f';
        const expectedParsedResult = {recieverKingdoms: ['asadf', 'asdfaqwer', 'fds'],messages: ['asdfdsfdsa', 'asdfd fdsasd', 'f']};

        const parsedResult = inputParser.parse(inputString);

        expect(parsedResult).toEqual(expectedParsedResult);
    });
});