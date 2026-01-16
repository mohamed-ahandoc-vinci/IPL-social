import { isEmailValid } from "./emailValidator";

describe('Email Validation', () => {
    test('should return true for a valid email', () => {
        expect(isEmailValid("student@vinci.be")).toBe(true);
    });

    test('should return false if email does not contain @', () => {
        expect(isEmailValid("studentvinci.be")).toBe(false);
    });
});