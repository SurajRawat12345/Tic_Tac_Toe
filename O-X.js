let count = 0;
let gameOver = false;
let first_turn = "X";
let turn = "X";
scoreO = document.getElementById("o");
scoreX = document.getElementById("x");
let cntO = 0;
let cntX = 0;
gif_X = document.getElementById("gif1");
gifi_X = document.getElementById("gifi1");
gif_O = document.getElementById("gif2");
gifi_O = document.getElementById("gifi2");
gif_D = document.getElementById("gif3");
gifi_D = document.getElementById("gifi3");
let turn_audio = new Audio("Audio/click audio.wav");
let win_audio = new Audio("Audio/Winner.wav");
let draw_audio = new Audio("Audio/cartoon whistle.wav")
let btn_audio = new Audio("Audio/click sound.wav");

changeTurn = () =>{
    if(turn == "X"){
        turn = "O"; 
    }
    else{
        turn = "X";
    }
    return turn;
}
changeFirstTurn = () =>{
    if(first_turn == "X"){
        first_turn = "O"; 
    }
    else{
        first_turn = "X";
    }
    return first_turn;
}

checkWin = () => {
    boxText = document.getElementsByClassName("box");
    let win = [
        [0,1,2] , [3,4,5], [6,7,8],
        [0,3,6] , [1,4,7], [2,5,8],
        [0,4,8] , [2,4,6]
    ]
    win.forEach(e => {
        if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML === boxText[e[2]].innerHTML) && (boxText[e[0]].innerHTML != "")){
            gameOver = true;
            boxText[e[0]].style.background = "var(--color4)";
            boxText[e[0]].style.border = "0.25rem solid var(--color3)";
            boxText[e[1]].style.background = "var(--color4)";
            boxText[e[1]].style.border = "0.25rem solid var(--color3)";
            boxText[e[2]].style.background = "var(--color4)";
            boxText[e[2]].style.border = "0.25rem solid var(--color3)";
            win_audio.play();
            if(boxText[e[0]].innerHTML == "X"){
                cntX++;
                scoreX.innerHTML = cntX;
                gif_X.style.width = "7.5rem";
                gifi_X.style.width = "7.5rem";
                
            }
            else{
                cntO++;
                scoreO.innerHTML = cntO; 
                gif_O.style.width = "7.5rem";
                gifi_O.style.width = "7.5rem";
            }
        }
    })
}

// RESET FUNCTION

reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    btn_audio.play();
    count = 0;
    cntX = 0;
    cntO = 0;
    gameOver = false;
    turn = "X";
    boxi = document.getElementsByClassName("box");
    Array.from(boxi).forEach(element => {
        element.innerHTML = "";
        element.style.background = "var(--color3)";
    })
    scoreX.innerHTML = cntX;
    scoreO.innerHTML = cntO;
    gif_X.style.width = "0rem";
    gifi_X.style.width = "0rem";
    gif_O.style.width = "0rem";
    gifi_O.style.width = "0rem";
    gif_D.style.width = "0rem";
    gifi_D.style.width = "0rem";

})

// Next Round Button
nextBtn =  document.getElementById("next");
nextBtn.addEventListener('click', () => {
    btn_audio.play();
    count = 0;
    gameOver = false;
    turn = changeFirstTurn();
    boxi = document.getElementsByClassName("box");
    Array.from(boxi).forEach(element => {
        element.innerHTML = "";
        element.style.background = "var(--color3)";
    })
    scoreX.innerHTML = cntX;
    scoreO.innerHTML = cntO;
    gif_X.style.width = "0rem";
    gifi_X.style.width = "0rem";
    gif_O.style.width = "0rem";
    gifi_O.style.width = "0rem";
    gif_D.style.width = "0rem";
    gifi_D.style.width = "0rem";
})

boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', () =>{
        if((element.innerText === "") && (gameOver == false) ){
            turn_audio.play();
            element.innerHTML = turn;
            turn = changeTurn();
            count++;
            checkWin();
            if(count == 9 && gif_X.style.width == "0rem" && gif_O.style.width == "0rem"){
                gif_D.style.width = "7.5rem";
                gifi_D.style.width = "7.5rem";
                draw_audio.play();
            }
        }
    })
})