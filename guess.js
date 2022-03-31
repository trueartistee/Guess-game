var bg = document.getElementById("body");
var Rand = Math.floor(Math.random()*20 + 1);
var userguess;
var check = document.getElementById("check");
var scor = document.getElementById("scoredis");
var score = parseInt(scor.innerHTML);
var hscor = document.getElementById("hsdis");
var mark = document.getElementById("mark");
var hscore = parseInt(hscor.innerHTML);
hscore = 0;
var x = 20; //score counter
var y = 20; //highscore counter
var z = x;
//console.log(Rand);
function okay(){
    userguess = document.getElementById("nn").value;
    ss.innerHTML = userguess;
    if(userguess == Rand){
        bg.style.backgroundColor = "green";
    }
    else{
        bg.style.backgroundColor = "tomato";
    }
}
function checkguess(){
    userguess = document.getElementById("nn").value;
    if(score != 0){
        if(userguess == Rand){
            bg.style.backgroundColor = "green";
            scor.innerHTML = ++x;
            score++;
            check.innerHTML = "You got it right!";
            mark.innerHTML = userguess;
            if(score > 20){
                hscor.innerHTML = score;
            }
        }
        
        else if(userguess < Rand){
            bg.style.backgroundColor = "tomato";
            scor.innerHTML = --x;
            score--;
            if(score == 0){
                check.innerHTML = "You lost!";
                bg.style.backgroundColor = "brown";
            }
            else{
                check.innerHTML = "Too low!";
            }
        }
        else if(userguess > Rand){
            bg.style.backgroundColor = "tomato";
            scor.innerHTML = --x;
            score--;
            if(score == 0){
                check.innerHTML = "You lost!";
                bg.style.backgroundColor = "brown";
            }
            else{
                check.innerHTML = "Too High!";
            }
        }
    }
    
}

function reset(){
    bg.style.backgroundColor = "black";
    Rand = Math.floor(Math.random()*20 + 1);
    //console.log(Rand);
    scor.innerHTML = 20;
    check.innerHTML = "";
    mark.innerHTML = "?";
    score = 20;
    document.getElementById("nn").value = "";
    x = 20;
    y = 0;
}