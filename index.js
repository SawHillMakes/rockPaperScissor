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

function getHumanChoice()
{
    let humanInput = prompt('Enter: \'rock\', \'paper\', or  \'scissor\'');
    humanInput = humanInput.charAt(0);
    if(humanInput == 'R' || humanInput == 'r')
    {
        return humanInput.toUpperCase();
    }
    else if(humanInput == 'S' || humanInput == 's')
    {
        return humanInput.toUpperCase();
    }
    else if(humanInput == 'P' || humanInput == 'p')
    {
        return humanInput.toUpperCase();
    }
    else
    {
        alert('Wrong input');
    }
    return humanInput;
}

let humanScore = 0;
let computerScore = 0; 


function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        alert('Tie!');
    }
    else if(humanChoice == 'R' && computerChoice == 'S')
    {
        alert('You Win! Rock Beats Scissors');
        ++humanScore;
    }
    else if(humanChoice == 'R' && computerChoice == 'P')
    {
        alert('You Lose! Rock losses to Paper');
        ++computerScore;
    }    
    else if(humanChoice == 'S' && computerChoice == 'R')
    {
        alert('You Lose! Scissors losses to Rock');
        ++computerScore;
    }
    else if(humanChoice == 'S' && computerChoice == 'P')
    {
            alert('You Win! Scissors Beats Paper');
            ++humanScore;
    }
    else if(humanChoice == 'P' && computerChoice == 'R')
    {
        alert('You Win! Paper Beats Rock');
        ++humanScore;
    }
    else if(humanChoice == 'P' && computerChoice == 'S')
    {
        alert('You Lose! Paper losses to Scissors');
        ++computerScore;
    }
}


function playGame()
{
    while(humanScore < 5 && computerScore < 5)
    {
        playRound(getHumanChoice(), getComputerChoice());
        alert('Your Score: ' + humanScore + '\nComputer Score: ' + computerScore);
    }

    if(humanScore > computerScore)
    {
        alert('You Won Against The Computer!');
    }
    else
    {
        alert('You Lost Against The Computer!');
    }
}

playGame();