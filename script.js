console.log("Tic Tac Toe");
let BgMusic = new Audio("music.mp3");
let TurnMusic = new Audio("ting.mp3");
let GoverMusic = new Audio("gameover.mp3");
let turn = "X";
let isgameOver = false;
let drawcount = 0;

//Function to change the turn
const turnChange = () => {
  return turn === "X" ? "O" : "X";
};

//Function to check for a win
const checkWin = () => {
  let boxtext = document.querySelectorAll(".boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".Info").innerHTML = turn + " Won!!!";
      console.log("Game over");
      isgameOver = true;
      document
        .querySelector(".ImgBox")
        .getElementsByTagName("img")[0].style.width = "300px";
    }
  });
};

//Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (!isgameOver && boxtext.innerHTML === "") {
      TurnMusic.play();
      boxtext.innerHTML = turn;
      drawcount++;
      checkWin();
      turn = turnChange();
      if (!isgameOver) {
        document.querySelector(".Info").innerHTML = "Turn for " + turn;
        if (drawcount == 9) {
          document.querySelector(".Info").innerHTML = "Match Draw";
        }
      }
    }
  });
});

//Reset logic
Reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerHTML = "";
    turn = "X";
    document.querySelector(".Info").innerHTML = "Turn for " + turn;
    document
      .querySelector(".ImgBox")
      .getElementsByTagName("img")[0].style.width = "0px";
    drawcount = 0;
    isgameOver = false;
  });
});
