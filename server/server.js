const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

//player's arrays
let guessListOne = [];
// let guessListTwo = [];
// let guessListThree = [];
// let guessListFour = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
// POST request
app.post('/history', (req, res) => {
    //where is the quote?
    console.log('POST /history', req.body); //4. req.body is the data sent from the client => server
    //5. save our quote...
    guessListOne.push(req.body);
    // check our array
    console.log('after push guessListOne', guessListOne);
    //6. send back response...
    res.sendStatus(201); //201 is a good response 'I created something! Yay'
});

app.get('/history', (req, res) => {
    res.send(guessListOne);
});

app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});

// All random number stuff should happen on the server: Generation of the random number upon game start as well as comparisons between guesses and the random correct answer.

// generate random number
let randomNumber = Math.ceil(Math.random() * 25);
console.log(`Random number:`, randomNumber);

// we left off here
function compareGuesses(array) {
    // check our array
    console.log(`array:`, array[0]);
    let toReturn = '';
    let lastGuess = array.length - 1;
    //equal to randomNumber
    if (array[lastGuess] === randomNumber) {
        toReturn = `It's working!`;
    }
    //greater than randomNumber
    if (array[lastGuess] > randomNumber) {
        toReturn = `Your number is too high`;
    }
    // less than randomNumber
    if (array[lastGuess] < randomNumber) {
        toReturn = `Your number is too low`;
    }
    console.log(toReturn);
    console.log(`guessListOne`, guessListOne[0].currentGuess);
    return toReturn;
}

compareGuesses(guessListOne);
