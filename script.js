playGame();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let pcChoice;
    let humanChoice;

    //run for five rounds
    for (let i = 0; i < 5; i++){
        //gets pc choice
        let random = Math.floor(Math.random() * 3);
        pcChoice = getPcChoice(random);

        //get user choice
        humanChoice = getHumanChoice();

        //determine winner
        let roundWinner = playRound(humanChoice, pcChoice);

        if (roundWinner == "h"){
            humanScore++;
            alert("User wins this round!");
        }
        else if (roundWinner == "c"){
            computerScore++;
            alert("Computer wins this round!");
        }
        else{
            alert("Its a tie!");
        }
    }

    //display results
    declareWinner(humanScore, computerScore);
}

function getHumanChoice(){
    let userInput = prompt("Choose one rock, paper, or scissor: ")
    userInput = userInput.toLowerCase();
    return userInput;
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

function declareWinner(hScore, cScore){
    if (hScore > cScore){
        console.log("User wins with a score of " + hScore);
    }
    else{
        console.log("Computer wins with a score of " + cScore);
    }
}
 

/*
ROCK PAPER SCISSORS
pc pick between rock paper or scissor
if same choice go again
     ask user for another choice and get new pc picj
     continue until different
if different announce winner
rock beats scissor: 0 beats 2
scissor beats paper: 2 beats 1
paper beats rock: 1 beats 0

*/