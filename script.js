// TODO: Implement the password generation logic based on user input
export const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characters = '';
    if (options.includeUppercase) characters += uppercase;
    if (options.includeLowercase) characters += lowercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSpecialChars) characters += specialChars;

    if (characters === '') {
        throw new Error('At least one character type must be selected.');
    }

    

    // TODO: Create a variable for the character set based on selected options
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    // TODO: Generate the password based on the selected criteria
    return password;
};


