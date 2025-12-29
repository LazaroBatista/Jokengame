const result = document.querySelector('.result')
let myScore = document.querySelector('#human-score')
let machineScore = document.querySelector('#machine-score')

let player1Name = ''
let player2Name = ''


const catchNames = () => {
    let nameOne = document.querySelector('#nameOne').value
    let nameTwo = document.querySelector('#nameTwo').value
    
    if (nameOne === '' || nameTwo === '') {
    alert("Por favor, preencha os nomes!")
    return
} else {
    player1Name = nameOne
    player2Name = nameTwo
        document.getElementById("initial-window").style.display = "none";
        document.getElementById("theGame").style.display = "block";

        myScore.parentElement.innerHTML = `Pontuação de ${player1Name}: <span id="human-score">0</span>`
        machineScore.parentElement.innerHTML = `Pontuação de ${player2Name}: <span id="machine-score">0</span>`

        myScore = document.querySelector('#human-score')
        machineScore = document.querySelector('#machine-score')
}
}

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const ramdomNumber = Math.floor(Math.random() * 3)

    return choices[ramdomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = `Escolhas iguais. Empate!`
    } else if ( (human === 'Papel' && machine === 'Pedra') || 
                (human === 'Pedra' && machine === 'Tesoura') ||
                (human === 'Tesoura' && machine === 'Papel')) {
                    
                humanScoreNumber++
                myScore.innerHTML = humanScoreNumber
                result.innerHTML = `${player2Name} escolheu: ${machine}. ${player1Name} ganhou!`
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = `${player2Name} escolheu: ${machine}. ${player2Name} ganhou!`
    }
}

document.getElementById("backInitial").addEventListener("click", function () {
    document.getElementById('initial-window').style.display = "flex";
    document.getElementById('theGame').style.display = "none";
    document.querySelector('#nameOne').value = ''
    document.querySelector('#nameTwo').value = ''
})