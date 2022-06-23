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
        currentGuess: Number($('#player-one').val()),
    };
    //check to see if currentGuess is showing
    console.log(currentGuess.currentGuess);
    // AJAX => server.js
    $.ajax({
        url: '/history',
        method: 'POST',
        data: currentGuess,
    })
        .then(function (response) {
            console.log(response); //CREATED
        })
        .catch(function (error) {
            console.log(error);
            alert('ERROR in POST /history');
        });
}
