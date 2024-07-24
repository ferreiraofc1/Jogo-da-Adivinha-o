const readlineSync = require('readline-sync');

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNumber = generateRandomNumber();
let attempts = 0;
let guessedCorrectly = false;

console.log("Bem-vindo ao Jogo de Adivinhação de Números!");
console.log("Eu pensei em um número entre 1 e 100. Tente adivinhar!");

while (!guessedCorrectly) {
    const guess = readlineSync.question("Digite seu palpite: ");
    
    if (isNaN(guess) || guess.trim() === '') {
        console.log("Por favor, insira um número válido.");
        continue;
    }
    
    const guessNumber = parseInt(guess, 10);
    attempts++;

    if (guessNumber < randomNumber) {
        console.log("Muito baixo! Tente novamente.");
    } else if (guessNumber > randomNumber) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log(`Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`);
        guessedCorrectly = true;
    }
}
