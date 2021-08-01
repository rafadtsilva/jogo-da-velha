
document.addEventListener('DOMContentLoaded', () => {
  
  addClick();

})

function addClick () {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })

}

function handleClick(event) {

  click++;
  console.log(click)
  let square = event.target;
  square.removeEventListener('click', handleClick);
  let position = square.id;

  if(handleMove(position)) {
    
    setTimeout(() => {
      if(!alert("O Jogo Acabou - O vencedor foi " + playerTime)) reset();
    }, 10)

  } else if (click==9) {

    setTimeout(() => {
      if(!alert("Empate!!")) reset();
    }, 10)

  };

  updateSquares(position);

}

function updateSquares(position) {

  let square = document.getElementById(position.toString());
  let symbol = board[position];

  square.innerHTML = `<div class='${symbol}'></div>`


  
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