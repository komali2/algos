var pathChecker = function(board, path){
  var board = new Board(board);
  var check = true;
  for(var i = 0; i < path.length - 1; i++){
    check = check && board.isValidNext(path[i], path[i + 1]);
  }
  return check;
}

function Board(matrix){
  this.board = matrix;
  this.getAdjacentPieces = function(row, col){
    //board[row][col]
    var out = [];
    if(row > 0){
      out.push(this.board[row - 1][col]);
    }
    if(row < this.board.length - 1){
      out.push(this.board[row + 1][col]);
    }
    if(col > 0){
      out.push(this.board[row][col - 1]);
    }
    if(col < this.board[0].length - 1){
      out.push(this.board[row][col + 1]);
    }
    return out;
  }
  this.getIndexOf = function(value){
    for(var i = 0; i < this.board.length; i++){
      for(var j = 0; j < this.board[0].length; j++){
        if(this.board[i][j] === value){
          return [i, j];
        }
      }
    }
  }
  this.isValidNext = function(currentValue, checkValue){
    var index = this.getIndexOf(currentValue);
    var nextMoves = this.getAdjacentPieces(index[0], index[1]);
    return nextMoves.indexOf(checkValue) !== -1;
  }
}

    var board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    var pathGood = [1, 4, 5];

pathChecker(board, pathGood)