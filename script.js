// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {
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

    // TODO: Create a variable for the character set based on selected options
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    // TODO: Generate the password based on the selected criteria
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
    document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('lengthInput').value, 10);
    const options = {
        includeUppercase: document.getElementById('uppercaseInput').checked,
        includeLowercase: document.getElementById('lowercaseInput').checked,
        includeNumbers: document.getElementById('numbersInput').checked,
        includeSpecialChars: document.getElementById('specialCharsInput').checked,
    };

    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});
 
// BONUS: Implement the copy to clipboard functionality
    document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (output) {
        navigator.clipboard.writeText(output).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});
