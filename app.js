let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".dev1");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}


function convertToWord(letter)
{
    if(letter==='r') return 'Rock';
    if(letter==='p') return 'Paper';
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    //const userChoice_div=document.getElementById(userChoice);
    result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    //userChoice_div.classList.add('greenGlow');  
    //setTimeout(function(){userChoice_div.classList.remove('greenGlow')},1000);
    
}

function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_div.innerHTML=`${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Loose!`;
    
}

function draw(){
    userScore=userScore;
    computerScore=computerScore;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=("Its a draw. No one wins!");
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);            
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }

}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}
main();