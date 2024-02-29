let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let compMessage = document.querySelector("#cMove");
let reset = document.querySelector("#reset-btn");

let userScore = 0;
let compScore = 0;

let Uscore = document.querySelector("#user-score");
let Cscore = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let move = choice.getAttribute("id");
        let compute = compMove();
        compMessage.textContent = "Computer's Move: " + compute;
        checkWinner(move,compute);
    })
})

const compMove = () => {
    let index = Math.floor(Math.random() * 3);
    if(index === 0){
        return "rock";
    }
    else if(index === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

const checkWinner = (userMove, computerMove) => {
    if(userMove === "rock" && computerMove === "rock" || userMove === "paper" && computerMove === "paper" || userMove === "scissors" && computerMove === "scissors"){
        message.textContent = "DRAW";
    }
    else{
        if(userMove === "rock" && computerMove === "scissors" || userMove === "scissors" && computerMove === "paper" || userMove === "paper" && computerMove === "rock"){
            message.textContent = "YOU WIN";
            userScore++;
            Uscore.textContent = userScore;
        }
        else{
            message.textContent = "YOU LOSE";
            compScore++;
            Cscore.textContent = compScore;
        }
    }
}

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    Uscore.textContent = userScore;
    Cscore.textContent = compScore;
    message.textContent = "Play your move";
    compMessage.textContent = "";
})