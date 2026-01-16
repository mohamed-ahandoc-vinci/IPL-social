import { isEmailValid } from "./emailValidator";

describe('Email Validation', () => {
    test('should return true for a valid email', () => {
        expect(isEmailValid("student@vinci.be")).toBe(true);
    });

    test('should return false if email does not contain @', () => {
        expect(isEmailValid("studentvinci.be")).toBe(false);
    });

    test('should return false if email contains spaces', () => {
        expect(isEmailValid("student @vinci.be")).toBe(false);
    });

    test('should return false if text before @ is missing', () => {
        expect(isEmailValid("@vinci.be")).toBe(false);
    });

    test('should return false if text after @ is missing', () => {
        expect(isEmailValid("student@")).toBe(false);
    });

    test('should return false if domain does not contain a dot', () => {
        expect(isEmailValid("student@vinci")).toBe(false);
    });

    test('should return false if dot is the last character', () => {
        expect(isEmailValid("student@vinci.")).toBe(false);
    });
});