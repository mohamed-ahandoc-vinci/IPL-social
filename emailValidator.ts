export function isEmailValid(email: string): boolean {
    if (!email.includes("@")) {
        return false;
    }
    return true;
}