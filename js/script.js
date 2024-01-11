
function playGame(playerInput) {

    clearMessages()

    if (getMoveName(playerInput) != 'nieznany ruch') {

        let playerMove = getMoveName(playerInput);
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        let computerMove = getMoveName(randomNumber);
        displayResult(computerMove, playerMove)

    } else {
        printMessage('Spróbujmy jeszcze raz');
    }
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
