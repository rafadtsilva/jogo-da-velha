let squares = document.querySelectorAll(".square");
let scoreText = document.querySelectorAll(".player p");

document.addEventListener('DOMContentLoaded', () => {
  
  addClick();

})

function addClick () {

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })

}

function handleClick(event) {

  click++;
  let square = event.target;
  square.removeEventListener('click', handleClick);
  let position = square.id;

  if(handleMove(position)) {
    
    setTimeout(() => {
      if(!alert("O Jogo Acabou - O vencedor foi " + playerTime)) {
        score[playerTime]++;
        scoreText[playerTime].innerHTML = `: ${score[playerTime]}`;
        reset();
      } 
    }, 20)

  } else if (click==9) {

    setTimeout(() => {
      if(!alert("Empate!!")) reset();
    }, 20)

  };

  updateSquares(position);

}

function updateSquares(position) {

  let square = squares[position];
  let symbol = board[position];

  square.innerHTML = `<img src="assets/${symbol}.svg">`;



  if(gameOver){
    for(let seq of seqFinal) {
      document.getElementById(seq.toString()).style.backgroundColor = "#0487D9";
    }
  }

  if(click==9 && gameOver==false) {
    for(let i=0; i<9; i++){  
      document.getElementById(i.toString()).style.backgroundColor = "#F2994B";
    }
  }

}

function resetAll () {
  score = [0, 0];
  scoreText[0].innerHTML = `: ${score[0]}`;
  scoreText[1].innerHTML = `: ${score[1]}`;
  reset();
}

function reset () {

  addClick();
  playerTime = (playerTime == 0) ? 1 : 0;
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  click=0;

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = "";
    square.style.backgroundColor = "unset";
  })

}



// function updateSquares() {
  

//   let squares = document.querySelectorAll(".square");

//   squares.forEach((square) => {

//     let position = square.id;
//     let symbol = board[position];

//     if (symbol != '') {
//       square.innerHTML = `<div class='${symbol}'></div>`
//     }

//   })

// }