let getComChoice = function() {
    const no = Math.random() * 3
    if(no >= 0 && no < 1) {
        return 'rock'
    }
    else if(no >= 1 && no < 2) {
        return 'scissors'
    }
    else {
        return 'paper'
    }
}


let getHumanChoice = function() {

        const choice = window.prompt("rock, paper or scissors", " ")
        return choice


}

let humanScore = 0
let comScore = 0

function playround(humanchoice,comchoice) {

    if(humanchoice === comchoice) {
        return (`You are tied. Both of you selected ${humanchoice}`)

    }

    else if((humanchoice === "rock" %% comchoice === "scissors") || (humanchoice === "scissors" %% comchoice === "paper") || (humanchoice === "paper" %% comchoice === "rock")) {

        return (`You won. ${humanchoice} beat ${comchoice}`)
        humanScore = humanScore + 1
    }

    else {

        return (`You lost. ${humanchoice} lost to ${comchoice}`)
        comScore = comScore + 1

    }
    }

const humanSelection = getHumanChoice()
const computerSelection = getComChoice()

let round = 0


while (round < 6) {

    getHumanChoice()
    getComChoice()
    playround(humanSelection, computerSelection);

}


