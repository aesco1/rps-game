function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const MAXSCORE = 5;
    let gameActive = true;

    console.log("playGame() started");

    // event listener for all 3 buttons
    let gameButtons = document.querySelector(".game-buttons");
    const results = document.querySelector(".results");

    console.log("gameButtons:", gameButtons);
    console.log("results:", results);

    if (!gameButtons) {
        console.error("gameButtons not found!");
        return;
    }
    if (!results) {
        console.error("results element not found!");
        return;
    }

    gameButtons.addEventListener('click', (event) =>{
        console.log("Button clicked!", event.target.id);
        console.log("results inside click:", results);

        //Checks to see if game is over
        if (!gameActive) return;

        let target = event.target;

        //gets pc choice
        let random = Math.floor(Math.random() * 3);
        let pcChoice = getPcChoice(random);
        let humanChoice = target.id
        //Play round
        let roundWinner = playRound(humanChoice, pcChoice);

        //determine winner
        if (roundWinner === "h"){
            humanScore++;
        }
        else if (roundWinner === "c"){
            computerScore++;
        }
        
        //display Results
        results.textContent = `YOU CHOSE ${humanChoice.toUpperCase()}
        COMPUTER CHOSE ${pcChoice.toUpperCase()}.
        SCORE: YOU ${humanScore} | COMPUTER ${computerScore}`;

        //Check for a gamer winner
        if (humanScore === MAXSCORE){
            results.textContent = "🎉 YOU WIN THE GAME! 🎉";
            gameActive = false;
        } else if (computerScore === MAXSCORE){
            results.textContent = "COMPUTER WINS THE GAME!";
            gameActive = false;
        }
    });
        
}

function playRound(humanChoice, computerChoice){ 
    let winner;
    //tie
    if (humanChoice == computerChoice){
        winner = "tie";
    }

    //rock beats scissor
    if((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "rock")){
        if(humanChoice == "rock"){winner = "h"}
        else{winner = "c"}
    }

    //paper beats rock
    if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper")){
        if(humanChoice == "paper"){winner = "h"}
        else{winner = "c"}
    }

    //scissor beats paper
    if((humanChoice == "scissor" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissor")){
        if(humanChoice == "scissor"){winner = "h"}
        else{winner = "c"}
    }

    return winner;
}

function getPcChoice(randomNum){
    let converted;

    switch (randomNum){
        case 0: converted = "rock"; break;
        case 1: converted = "paper"; break;
        case 2: converted = "scissor"; break;
    }
    return converted;
}

// Make sure this runs after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    playGame();
});