# Node.js Translation App

## Overview
This application translates text into a fictional language based on specified rules. It uses Node.js and Express.js for the backend and vanilla JavaScript for the frontend.

## Translation Rules
1. Text always begins with the word `UBCO`.
2. All vowels in the original text (a, e, i, o, u) are doubled.
3. All other letters (the consonants) in the original text are shifted by one place to the next consonant in the alphabet.
4. Text ends with a number indicating the number of words in the original text.
5. Case is preserved.
6. All other characters (punctuation, whitespace, etc.) are unchanged.

## How to Run
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your directory and Open CMD then run command 'node app.js' 

## Future Enhancements
- Add functionality to translate back from the alien language to English.
- Implement more robust error handling and validation.
- Improve the front-end design and user experience.

## Technical Decisions
- Used Express.js for simplicity and ease of setting up a basic server.
- Chose vanilla JavaScript for the frontend to keep the project simple and focused on the core functionality.
