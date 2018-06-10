var numWins = 0;
var numGuesses = 10;
var lettersGuessed = [""];
var maFilms = ["Enter The Dragon", "Police Story", "The Legend of the Drunken Master", "Crouching Tiger Hidden Dragon", "Fist of Legend", "The Protector", "Ip Man"];
// var maFilms = ["EnterTheDragon"];
var currentFilm = maFilms[Math.floor(Math.random()*maFilms.length)].toLowerCase();
var currentAnswer = [""];


function chooseFilm() {

    for (var i = 0; i < currentFilm.length; i++) {


        currentAnswer[i] = "_";
    }

    document.getElementById('maFilm').innerHTML = currentAnswer.join(" ");
}

chooseFilm();

document.onkeyup = function (event) {

    var letterPressed = event.key;
    var idxLetterPressed = currentFilm.indexOf(letterPressed);

    while(idxLetterPressed != -1){
            currentAnswer[idxLetterPressed] = letterPressed;
            document.getElementById('maFilm').innerHTML = currentAnswer.join(" ");

            idxLetterPressed = currentFilm.indexOf(letterPressed, idxLetterPressed + 1);

            if (currentAnswer.join("") === currentFilm) {
                numWins++;
                document.getElementById('wins').innerHTML = numWins;
                var audio = document.getElementById('audio');
                audio.play();
                document.getElementById('maFilm').innerHTML += "<br> That is CORRECT! <br> Press enter to play again";
            }
        }

        if (!currentFilm.includes(letterPressed)) {
            console.log("Letter pressed is " + letterPressed);
            numGuesses--;
            document.getElementById('guesses').innerHTML = numGuesses;
            lettersGuessed.push(letterPressed);
            document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(" ");
        }
    if (event.key === "Enter" && numWins > 0) {

    }
}


function reset() {
    var numGuesses = 10;

}


