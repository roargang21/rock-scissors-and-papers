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

    else if((humanchoice === "rock" && comchoice === "scissors") || (humanchoice === "scissors" && comchoice === "paper") || (humanchoice === "paper" && comchoice === "rock")) {
        humanScore = humanScore + 1
        return (`You won. ${humanchoice} beat ${comchoice}`)
        
    }

    else {
        comScore = comScore + 1
        return (`You lost. ${humanchoice} lost to ${comchoice}`)
        

    }
    }


let round = 1


while (round < 6) {

    const humanSelection = getHumanChoice()
    const computerSelection = getComChoice()
    playround(humanSelection, computerSelection);
    console.log(`human choice is ${humanSelection}`)
    console.log(`computer choice is ${computerSelection}`)
    console.log(`Round number is ${round}`)
    round = round + 1
    
    
}

// this is after the game ends

if(comScore > humanScore) {
    console.log(`You lost.`)
}
else if(comScore===humanScore) {
    console.log(`You tied.`)
}
else {
    console.log(`You won.`)
}


