
/* Produces a diagram that looks like this:
   1   2   3
A    |   |
  -----------
B    |   |
  -----------
C    |   |   
*/
function getInitialBoard(): string {
  // If height is larger than 9, we need to adjust the label widths
  // to account for two-digit labels:
  const H: number = 3;
  // If the width is larger than 26, we need to adjust the column labels
  // to account for labels after Z:
  const W: number = 3;

  let boardString: string = '';

  // Column labels:
  for (let j = 0; j < W; j += 1) {
    boardString += '   ' + String.fromCharCode('A'.charCodeAt(0) + j);
  }
  boardString += '\n';

  // Rest of the board:
  for (let i = 0; i < H; i += 1) {
    if (i > 0) {
      // Add a divider line:
      for (let j = 0; j < W; j += 1) {
        if (j === 0) {
          boardString += '  ---';
        } else {
          boardString += '----';
        }
      }
      boardString += '\n';
    }

    // Add a line with a row label and column dividers:
    for (let j = 0; j < W; j += 1) {
      if (j === 0) {
        boardString += (i + 1).toString() + '    ';
      } else {
        boardString += '|   ';
      }
    }
    boardString += '\n';
  }

  return boardString;
}

console.log(getInitialBoard());
