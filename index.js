const userScore = document.getElementById("userscore");
const compScore = document.getElementById("compscore");
let userPerf = 0;
let compPerf = 0;
const result = document.querySelector(".result");
const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const scissor = document.querySelector(".s");

function comp()
{
    const random = Math.floor(Math.random()*3);
    let res;
    switch(random){
    case 0:
        res = "r";
        break;
    case 1:
        res = "p";
        break;
    case 2:
        res = "s";
        break;
                  }
     return res;
}
function win(){
    userPerf++
    userScore.innerHTML = userPerf;
    result.innerHTML= "You Win";
}
function lose(){
    compPerf++;
    compScore.innerHTML = compPerf;
    result.innerHTML="Computer Wins"
}
function draw(){
    result.innerHTML="Its a Draw"
}
function decide(userChoice)
{
   const compChoice = comp();
   switch(userChoice+compChoice)
   {
       case "rs":
           win();
           break;
       case "sp":
            win();
            break;
       case "pr":
            win();
            break; 
        case "rp":
            lose();
            break;
        case "sr":
            lose();
            break;
        case "ps":
            lose();
            break;
        case "rr":
            draw();
            break;
        case "pp":
            draw();
            break;
        case "ss":
            draw();
            break;
    }
   
}
rock.addEventListener("click",function(){
    decide("r")
})
paper.addEventListener("click",function(){
    decide("p")
})
scissor.addEventListener("click",function(){
    decide("s")
})