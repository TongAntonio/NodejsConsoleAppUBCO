// translate.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to double vowels
const doubleVowels = (text) => {
    return text.replace(/[aeiou]/gi, (vowel) => vowel + vowel);
};

// Function to shift consonants
const shiftConsonants = (text) => {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    return text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, (char) => {
        const isUpperCase = char === char.toUpperCase();
        const baseChar = char.toLowerCase();
        const index = consonants.indexOf(baseChar);
        const nextChar = consonants[(index + 1) % consonants.length];
        return isUpperCase ? nextChar.toUpperCase() : nextChar;
    });
};

// Function to count words
const countWords = (text) => {
    return text.split(/\s+/).length;
};

// Main translation function
const translateText = (text) => {
    const doubledVowelsText = doubleVowels(text);
    const shiftedConsonantsText = shiftConsonants(doubledVowelsText);
    const wordCount = countWords(text);
    return `UBCO ${shiftedConsonantsText}${wordCount}`;
};

// Reverse translation function
const reverseTranslateText = (translatedText) => {
    // Remove 'UBCO ' prefix
    if (translatedText.startsWith('UBCO ')) {
        translatedText = translatedText.slice(5);
    }

    // Extract word count from the end
    const wordCountMatch = translatedText.match(/\d+$/);
    const wordCount = wordCountMatch ? parseInt(wordCountMatch[0], 10) : 0;
    translatedText = translatedText.replace(/\d+$/, '');

    // Reverse shift consonants
    const reverseShiftConsonants = (text) => {
        const consonants = 'bcdfghjklmnpqrstvwxyz';
        return text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, (char) => {
            const isUpperCase = char === char.toUpperCase();
            const baseChar = char.toLowerCase();
            const index = consonants.indexOf(baseChar);
            const prevChar = consonants[(index - 1 + consonants.length) % consonants.length];
            return isUpperCase ? prevChar.toUpperCase() : prevChar;
        });
    };

    // Reverse double vowels
    const reverseDoubleVowels = (text) => {
        return text.replace(/([aeiou])\1/gi, (vowel) => vowel[0]);
    };

    const reversedConsonantsText = reverseShiftConsonants(translatedText);
    const originalText = reverseDoubleVowels(reversedConsonantsText);

    return originalText;
};

// Extend the user input handling for reverse translation
const handleUserInput = () => {
    rl.question('Enter text to translate or "R" to reverse translate: ', (inputText) => {
        if (inputText.toLowerCase() === 'r') {
            rl.question('Enter text to reverse translate: ', (translatedText) => {
                const originalText = reverseTranslateText(translatedText);
                console.log(`Original Text: ${originalText}`);
                rl.close();
            });
        } else {
            const translatedText = translateText(inputText);
            console.log(`Translated Text: ${translatedText}`);
            rl.close();
        }
    });
};

// Start the application
handleUserInput();
