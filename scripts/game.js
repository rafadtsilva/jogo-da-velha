let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let click=0;
let seqFinal = []
let score = [0, 0]

let winStates = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function handleMove(position) {

  if(gameOver) {
    return;
  }

  if (board[position] == '') {

    board[position] = symbols[playerTime];

    gameOver = isWin();
  
    if(gameOver == false) {
      //substitiui o if maior
      playerTime = (playerTime == 0) ? 1 : 0
      
    }
  
  }


  return gameOver;

}

function isWin() {

  for(let i=0; i<winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(board[pos1] == board[pos2] &&
       board[pos1] == board[pos3] &&
       board[pos1] != '') {

        seqFinal = [seq[0], seq[1], seq[2]]

        return true;
       }

  }

  return false;

}