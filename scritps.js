const result = document.querySelector('.result')
const myScore = document.querySelector('.my-score')
const Scoremachine = document.querySelector('.score-machine')

let scoreHuman = 0
let scoreAlexia = 0

const playHumam = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock' , 'paper' , 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}

const playTheGame = (human, machine) => {

    console.log( 'humano:' + human  +  'maquina:' + machine)

    if (human === machine){
        result.innerHTML = 'EMPATOU'
    } else if (human === 'paper' && machine === 'rock'||
               human === 'rock' && machine === 'scissors'||
               human === 'scissors' && machine === 'paper'){
        
                scoreHuman++
                myScore.innerHTML = scoreHuman
                result.innerHTML = 'VOÇÊ GANHOU';
                
    } else {
        
        scoreAlexia++ 
        Scoremachine.innerHTML = scoreAlexia
        result.innerHTML = 'ALEXIA GANHOU';
        
    }


    } 

