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
    console.log(`this is the currentGuess:`, currentGuess.currentGuess);
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

function getArrayfromServer (){
    $.ajax({
        url:'/history',
        method: 'GET',
    })
    .then(function (response){
        console.log('array from server', response); //test the array begin GET from SEVER
    })
}
getArrayfromServer();
