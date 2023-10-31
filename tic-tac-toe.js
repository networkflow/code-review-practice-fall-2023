const A = 3;
const B = 3;

let boardString = '';

for (let j = 0; j < 3; j += 1) {
  boardString += '   ' + String.fromCharCode('A'.charCodeAt(0) + j);
}
boardString += '\n';

for (let i = 0; i < A; i += 1) {
  if (i > 0) {
    for (let j = 0; j < B; j += 1) {
      if (j === 0) {
        boardString += '  ---';
      } else {
        boardString += '----';
      }
    }
    boardString += '\n';
  }

  for (let j = 0; j < 3; j += 1) {
    if (j === 0) {
      boardString += (i + 1).toString() + '    ';
    } else {
      boardString += '|   ';
    }
  }
  boardString += '\n';
}

console.log(boardString);