let getComChoice = function() {
    const no = Math.random() * 3
    if(no >= 0 && no < 1) {
        return "rock"
    }
    else if(no >= 1 && no < 2) {
        return "scissors"
    }
    else {
        return "paper"
    }
}





const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

let humanChoice = undefined
let comChoice = undefined

rock.addEventListener("click", () => {
    
    humanChoice = "rock"
    comChoice = getComChoice()
    playround(humanChoice, comChoice)

})

paper.addEventListener("click", () => {
    
    humanChoice = "paper"
    comChoice = getComChoice()
    playround(humanChoice, comChoice)

})

scissors.addEventListener("click", () => {
    
    humanChoice = "scissors"
    comChoice = getComChoice()
    playround(humanChoice, comChoice)

})




let humanScore = 0
let comScore = 0

const div = document.querySelector("#results")
const span = document.createElement("span")

const score = document.querySelector("#score")
const numberH = document.createElement("span")
const numberC = document.createElement("span")


function playround(humanChoice,comChoice) {

    if(humanChoice === comChoice) {
        span.textContent = (`You are tied. Both of you selected ${humanChoice}`)
        div.appendChild(span)

    }

    else if((humanChoice === "rock" && comChoice === "scissors") || (humanChoice === "scissors" && comChoice === "paper") || (humanChoice === "paper" && comChoice === "rock")) {
        humanScore = humanScore + 1
        span.textContent = (`You won. ${humanChoice} beat ${comChoice}`)
        div.appendChild(span)

    }

    else {
        comScore = comScore + 1
        span.textContent =  (`You lost. ${humanChoice} lost to ${comChoice}`)
        div.appendChild(span)

    }

    numberH.textContent = (`Human Score: ${humanScore}`)
    numberC.textContent = (`Computer Score: ${comScore}`)
    score.appendChild(numberC)
    score.appendChild(numberH)


    }







// this is after the game ends
