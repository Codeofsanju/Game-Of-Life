class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    let grid = [];
    for(let i = 0; i < this.height; i++){
      let row = [];
      for(let j = 0; j < this.width; j++){
        row.push(0);
      }
      grid.push(row);
    }
    grid[3][4] = 1;
    console.dir(grid);
    return grid;
  }

    getCell(row, col){
      const args = Array.from(arguments);
      if (args.length !== 2 || row > this.width - 1 || col > this.height - 1 || row < 0 || col < 0){
        return 'error';
      }
      return this.board[row][col] === 0 ? 'dead':'alive';
    }

    setCell(value, row, col) {
      const args = Array.from(arguments);
      if (args.length !== 3 || row > this.width - 1 || col > this.height - 1 || row < 0 || col < 0){
        return 'error';
      }
      this.board[row][col] = value;
    }
    
    toggleCell(row, col) {
      if (this.getCell(row, col) === 'dead') {
        this.setCell(1, row, col);
      }
      else {
        this.setCell(0, row, col);
      }
    }
    



  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let topLeft = 0;
    let topDir = 0;
    let topRigh = 0;
    let left = 0;
    let right = 0;
    let botLeft = 0;
    let botDir = 0;
    let botRight = 0;
    
    if(row === 0 && col === 0){
        return this.board[row][col+1] + this.board[row+1][col+1] + this.board[row+1][col];
    }
    else if(row === 0 && col === width){
        return this.board[row][col-1]+this.board[row+1][col-1]+this.board[row+1][col];
    }
    else if(row === height && col === 0){
        topDir = this.board[row -1][col];
        topRight = this.board[row-1][col+1];
        return topDir+topRight+right;
    }
    else if(row === height && col === width){
        topDir = this.board[row -1][col];
        topLeft = this.board[row -1][col -1];
        left = this.board[row][col-1];
        return topDir+topLeft+left;
    }
    // middle of row 0 and row height
    else if(row === 0 || row === height){
        if(row === 0){
            return left+botLeft+botDir+botRight+right;
        }
        else if(row === height){
            return left+topLeft+topDir+topRight+right;
        }
    }
    // middle of column 0 and column width
    else if(col === 0 || col === width){
        if(col === 0){
            return topDir+topRight+right+botRight+botDir;
        }
        if(col === width){
            return topDir+topLeft+left+botLeft+botDir;
        }
    }
    else{
        topLeft = this.board[row -1][col -1];
        topDir = this.board[row -1][col];
        topRight = this.board[row-1][col+1];
        left = this.board[row][col-1];
        right = this.board[row][col+1];
        botLeft = this.board[row+1][col-1];
        botDir = this.board[row+1][col];
        botRight = this.board[row+1][col+1];
        return topDir+topRight+right+botRight+botDir+botLeft+left+topLeft;
    }
  }

if col = 0;
if col = width;
if row = 0;
if row = length;
if row = col;
  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    for(let i = 0; i < this.height; i++){
      for(let j = 0; j < this.width; j++){
        console.log(this.board[i][j]);
      }
    }
    this.board = newBoard;
  }
}
