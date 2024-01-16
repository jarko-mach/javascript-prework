{
    function playGame(playerInput) {

        clearMessages()

        if (getMoveName(playerInput) != 'nieznany ruch') {

            const playerMove = getMoveName(playerInput);
            const randomizedNumber = Math.random();
            const threeOutputStates = randomizedNumber * 3;
            const smallestRandomNumber = threeOutputStates + 1;
            // highest number is 3.999999999999
            const randomNumber = Math.floor(smallestRandomNumber);
            const computerMove = getMoveName(randomNumber);
            displayResult(computerMove, playerMove)

        } else {
            printMessage('Spróbujmy jeszcze raz');
        }
    }

    document.getElementById('play-rock').addEventListener('click', function () { playGame(1) });
    document.getElementById('play-paper').addEventListener('click', function () { playGame(2) });
    document.getElementById('play-scissors').addEventListener('click', function () { playGame(3) });
}