export function isEmailValid(email: string): boolean {
    if (!email.includes("@")) {
        return false;
    }
    if (email.includes(" ")) {
        return false;
    }

    const lastAtIndex = email.lastIndexOf("@");
    const beforePart = email.substring(0, lastAtIndex);
    const afterPart = email.substring(lastAtIndex + 1);

    if (beforePart.length === 0 || afterPart.length === 0) {
        return false;
    }

    if (!afterPart.includes(".")) {
        return false;
    }

    if (afterPart.endsWith(".")) {
        return false;
    }

    return true;
}