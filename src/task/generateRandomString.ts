

/**
 * Generates a random alphanumeric string of the specified length.
 * 
 * @param length The length of the random string to generate. Default is 8 characters.
 * @returns A random alphanumeric string.
 */
export function generateRandomString(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
