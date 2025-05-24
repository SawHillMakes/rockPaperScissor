function getComputerChoice()
{
    let computerInput = Math.random(); 
    let result = '';
    
    if(computerInput >= 0 && computerInput <= 0.29)
    {
        return result = 'R';
    }
    else if (computerInput >= 0.30 && computerInput <= .65)
    {
        return result = 'P';
    }
    else 
    {
        return result = 'S';
    }
    return 0; 
}


let humanScore = 0;
let computerScore = 0; 


function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        showResult.textContent = "Tie!"
    }
    else if(humanChoice == 'R' && computerChoice == 'S')
    {
        showResult.textContent = "You Win! Rock Beats Scissors!"
        ++humanScore;
    }
    else if(humanChoice == 'R' && computerChoice == 'P')
    {
        showResult.textContent = 'You Lose! Rock losses to Paper';
        ++computerScore;
    }    
    else if(humanChoice == 'S' && computerChoice == 'R')
    {
        showResult.textContent ='You Lose! Scissors losses to Rock';
        ++computerScore;
    }
    else if(humanChoice == 'S' && computerChoice == 'P')
    {
        showResult.textContent ='You Win! Scissors Beats Paper';
        ++humanScore;
    }
    else if(humanChoice == 'P' && computerChoice == 'R')
    {
        showResult.textContent ='You Win! Paper Beats Rock';
        ++humanScore;
    }
    else if(humanChoice == 'P' && computerChoice == 'S')
    {
        showResult.textContent ='You Lose! Paper losses to Scissors';
        ++computerScore;
    }
}


const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissor = document.createElement("button");
scissor.textContent = "scissor";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);

const showResult = document.createElement("div");
document.body.appendChild(showResult);

const displayHumanScore = document.createElement("div");
document.body.appendChild(displayHumanScore);

const displayComputerScore = document.createElement("div");
document.body.appendChild(displayComputerScore);
displayComputerScore.textContent = "Computer Score: " + computerScore;
displayHumanScore.textContent = "Your Score: " + humanScore;



rock.addEventListener("click", (e) =>
{
    playRound('R',getComputerChoice());
    displayComputerScore.textContent = "Computer Score: " + computerScore;
    displayHumanScore.textContent = "Your Score: " + humanScore;
})

paper.addEventListener("click", (e) =>
{
    playRound('P',getComputerChoice());
    displayComputerScore.textContent = "Computer Score: " + computerScore;
    displayHumanScore.textContent = "Your Score: " + humanScore;
})

scissor.addEventListener("click", (e) =>
{
    playRound('S',getComputerChoice());
    displayComputerScore.textContent = "Computer Score: " + computerScore;
    displayHumanScore.textContent = "Your Score: " + humanScore;
})