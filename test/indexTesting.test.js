const stringUtils = require('../src/stringUtils.js');

describe('stringUtils', () => {
    describe('reverse', () => {
        it('should reverse a string', () => {
            expect(stringUtils.reverseString('hello')).toBe('olleh');
        });

        it('should return empty string if input is empty', () => {
            expect(stringUtils.reverseString('')).toBe('');
        });
    });

    describe('isPalindrome', () => {
        it('should return true for palindrome strings', () => {
            expect(stringUtils.isPalindrome('racecar')).toBe(true);
        });

        it('should return false for non-palindrome strings', () => {
            expect(stringUtils.isPalindrome('hello')).toBe(false);
        });

        it('should be case insensitive', () => {
            expect(stringUtils.isPalindrome('RaceCar')).toBe(true);
        });
    });

    describe('truncate', () => {
        it('should truncate string to given length', () => {
            expect(stringUtils.truncateString('hello world', 5)).toBe('hello...');
        });

        it('should return the same string if length is greater', () => {
            expect(stringUtils.truncateString('hello', 10)).toBe('hello');
        });

        it('should return empty string if length is 0', () => {
            expect(stringUtils.truncateString('hello', 0)).toBe('...');
        });
    });

    describe('countCharacters', () => {
        it('should return an object with character counts', () => {
            expect(stringUtils.countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
        });

        it('should return an empty object for an empty string', () => {
            expect(stringUtils.countCharacters('')).toEqual({});
        });

        it('should count spaces and special characters', () => {
            expect(stringUtils.countCharacters('a b!')).toEqual({ a: 1, ' ': 1, b: 1, '!': 1 });
        });
    });
});