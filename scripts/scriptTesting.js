// coordinates to a set

let words = ["poop", "save","fridge"];
let board = [];
let letterCoordinates = [];
let rightCheckCoordinates = [];
let word = [];
let boardLength = 10;

//setting up board
for (let i = 0; i < boardLength; i++) {
  let row = []
  for (let n = 0; n < boardLength; n++) {
    row.push('.');
  }
  board.push(row);
}
//print board
function printBoard(board) {
  for (let a = 0; a < boardLength; a++) {
    console.log(board[a].join(" "));
  }
}
board[3][4] = 's';
board[4][4] = 'a';
board[6][4] = 'e';
board[5][4] = 'v';
board[5][5] = 'a';
board[5][6] = 'p';
board[5][7] = 'o';
board[5][8] = 'r';
board[6][6] = 'o';
board[7][6] = 'o';
board[4][8] = 'f';
board[6][8] = 'i';
board[7][8] = 'd';
board[8][8] = 'g';
board[9][8] = 'e';

printBoard(board);
console.log("\n")

// function valid(word) {
// 	console.log(word)
//   temp=word.join("")
//   for (let a = 0; a < words.length; a++) {
//     if (words[a] == temp) {
//       return true;
//     }
//   }
//   return false;
// }

function checkVertical(row, col) {
  let up = row - 1;
  let down = row + 1;
  let word = []
  word.push(board[row][col])

  //check up
  for (let i = up; i > 0; i--) {
    if (board[i][col] == ".") {
      break
    }
    word.splice(0, 0, board[i][col])
  }
  for (let j = down; j < 10; j++) {
    if (board[j][col] == ".") {
      break
    }
    word.push(board[j][col])
  }
  if (words.includes(word) || word.length ==1){
    return true;
  }else{
    return false
  }
}

checkVertical(5, 4)
checkVertical(5, 6)
checkVertical(5, 8)
checkVertical(5, 7)

// case 1 vertically (its own letters horizontally)

// start from bottom-most letter placed
// CORRECT word added: pro
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . p . .
// . . . . . . . r . .
// . . . . . . . o . .
// . . . . . . a p e .
// . . . . . . . e . .
// . . . . . . . l . .
// . . . . . . . . . .
// . . . . . . . . . .
// INCORRECT word added: s_e
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . p . .
// . . . . . . s r e .
// . . . . . . . o . .
// . . . . . . a p e .
// . . . . . . . e . .
// . . . . . . . l . .
// . . . . . . . . . .
// . . . . . . . . . .
// case 2 horizontally (its own letters vertically)
// word added: radar
// start from leftmost letter placed
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . r a d a r .
// . . . . . . a p e .
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . . . .
// . . . . . . . . . .

