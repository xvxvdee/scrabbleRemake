let words = ["stop", "cheese", "cat", "ear", "urine", "cake", "hat", "sleep", "aa", "qi", "ape", "tape", 'apes', 'radar', 'ork'];
let board = [];
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
//https://jsfiddle.net/

rows = [5]
cols = [7, 8]
wordLetter = ['r', 'k']
// while (true) {
//   letter = prompt('ENTER A LETTER (Enter "stop" to stop): ')
//   if (letter == 'stop' || letter == "STOP") {
//     break
//   }
//   row = prompt('ENTER A ROW: ')
//   column = prompt('ENTER A COLUMN: ')
//   board[row][column] = letter
//   wordLetter.push(letter)
//   rows.push(parseInt(row))
//   cols.push(parseInt(column))

//   printBoard(board);
//   console.log("\n")
// }


board[5][6] = 'o'
board[6][6] = 'r'
board[7][6] = 'b'
board[8][6] = 's'
/* board[6][6] = 'a' */
function checkHorizontal(rows, cols, letters) {
  let start = boardLength + 1
  let end = 0
  let num_cols = cols.length
  let right_str = ''
  let left_str = []
  row = rows[0]
  for (let i = 0; i < num_cols; i++) {
    if (cols[i] < start) {
      start = cols[i]
    }
    if (cols[i] > end) {
      end = cols[i]
    }
    board[rows[0]][cols[i]] = letters[i]
  }
  console.log(start, end)


  left_bool = true
  right_bool = true
  n = start - 1
  i = start

  while (right_bool || left_bool) {
    if (board[row][i] != '.' && right_bool && i < boardLength) {
      right_str += board[row][i]
    } else {
      right_bool = false
    }
    if (board[row][n] != '.' && left_bool && n > 0) {
      left_str.push(board[row][n])
    } else {
      left_bool = false
    }

    i++
    n--
  }

  left_str = left_str.reverse().join('')
  let new_word = left_str + right_str
  console.log(left_str, right_str)
  console.log(new_word)
  if (words.includes(new_word)) { //  if (isnewWord && words.includes(new_word)){
    return true
  }
  /*   else if (isnewWord==false && new_word==letters.join('')){
      return true
    } */
  return false

}

function mainChecker(rows, cols, wordLetter) {
  if (rows.length > cols.length) {
    let isHorizontal = true
    let length = rows.length
    let values = rows
    let forward = row[0] - 1
    let backward = row[0] + 1
  } else {
    let length = cols.length
    let isHorizontal = false
    let values = cols
    let forward = cols[0] + 1
    let backward = cols[0] - 1

  }
  min_value = boardLength + 1
  for (let i = 0; i < length; i++) {
    if (values[i] < min_value) {
      min_value = values[i]
    }
  }

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
  //check down
  for (let j = down; j < boardLength; j++) {
    if (board[j][col] == ".") {
      break
    }
    word.push(board[j][col])
  }

}















console.log(checkHorizontal(rows, cols, wordLetter))
/*
case 2 horizontally (its own letters vertically)
word added: radar
start from leftmost letter placed
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . r a d a r .
. . . . . . a p e .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .


*/
// function addWord(board){


// }                                                      

// let test= prompt("ENTER TEXT: ");
// console.log(test)
printBoard(board);
console.log("hello");