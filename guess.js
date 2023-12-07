let textBox = document.getElementById("textbox");
let space = document.getElementById("print");
let hint = document.getElementById("hint");
let btn1 = document.getElementById("start");
let btn2 = document.getElementById("match");
let btn3 = document.getElementById("exit");
let message = "";
function start(){
    textBox.style.visibility = "visible";
    space.textContent = "";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn1.style.visibility = "hidden";
    hint.style.visibility = "visible";
    
}
function match(){
    let num = Math.floor(Math.random() * 19 + 1);
    console.log(num);
    if(textBox.value == num){ /* */
        space.textContent = "You guessed right!";
    } else if(textBox.value == ""){
        space.textContent = "Enter a number";
    } else {
        space.textContent = "You guessed wrong";
    }
} 
function exit(){
    textBox.value = "";
    btn1.style.visibility = "visible";
    btn3.style.visibility = "hidden";
    btn2.style.visibility = "hidden";
    textBox.style.visibility = "hidden";
    space.textContent = "";
    hint.style.visibility = "hidden";
}