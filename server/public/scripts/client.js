$(document).ready(handleReady);

function handleReady() {
    console.log('jquery is loaded!');

    $('#submit').on('click', getGuesses);
}
// //player's arrays to delete later
// let guessListOne = [];
// let guessListTwo = [];
// let guessListThree = [];
// let guessListFour = [];

function getGuesses() {
    //grab the guess
    const currentGuess = {
        //remove Number
        guess: $('#player-one').val(),
    };
    //check to see if currentGuess is showing
    console.log(`this is the currentGuess:`, currentGuess.guess);
    // AJAX => server.js
    $.ajax({
        url: '/history',
        method: 'POST',
        data: currentGuess,
    })
        .then(function (response) {
            console.log(response); //CREATED
            clearInputs();
        })
        .catch(function (error) {
            console.log(error);
            alert('ERROR in POST /history');
        });
}
//clearItems function
function clearInputs() {
    $('input').val('');
}

function getArrayfromServer(array) {
    //grabbing the array
    $.ajax({
        url: '/history',
        method: 'GET',
    }).then(function (array) {
        console.log('array from server', array); //test the array begin GET from SERVER
        compareGuesses(array);
    });
    //grab the random Number
    $.ajax({
        url: '/random',
        method: 'GET',
    }).then(function (res) {
        console.log('randomNumber from server.js is:', res); //test the res begin GET from SERVER
    });
}
getArrayfromServer();

// issue: logic wasn't returning a message
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
    } else {
        console.log("ERROR THIS DIDN'T WORK");
        toReturn = "ERROR THIS DIDN'T WORK";
    }
    console.log(toReturn);
    console.log(`guessListOne`, guessListOne[0]);
    return toReturn;
}
