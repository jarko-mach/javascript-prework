
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (getMoveName(playerInput) != 'nieznany ruch') {

    let playerMove = getMoveName(playerInput);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    displayResult(computerMove, playerMove)

} else {
    printMessage('Spróbujmy jeszcze raz');
}
