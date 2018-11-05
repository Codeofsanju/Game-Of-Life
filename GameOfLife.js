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
    return grid;
  }

    getCell(row, col){
      if(row > this.height -1 || col > this.width -1 || row < 0 || col < 0){
        return 'error';
      }
      else{
        return this.board[row][col] === 0 ? 'dead':'alive';
      }
    }

    setCell(value, row, col) {
      const args = Array.from(arguments);
      if (args.length !== 3 || row > this.height-1 || col > this.width-1 || row < 0 || col < 0){
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
      const neighborsObj = {
        topLeft: this.getCell(row - 1, col - 1),
        topDir: this.getCell(row - 1, col),
        topRight: this.getCell(row - 1, col + 1),
        botLeft: this.getCell(row + 1, col - 1),
        botDir: this.getCell(row + 1, col),
        botRight: this.getCell(row + 1, col + 1),
        right: this.getCell(row, col + 1),
        left: this.getCell(row, col - 1),
      };
      let living = 0;
  
      for (let key in neighborsObj) {
        if (neighborsObj[key] === 'alive') {
          living++;
        }
        else{
          living += 0;
        }
      }
      return living;
  }

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
        let status = this.getCell(i,j);
        let livingN = this.livingNeighbors(i,j);
        if(status === 'alive'){
          if(livingN === 2 || livingN === 3){
            newBoard[i][j] = 1;
          }
          else if(this.livingNeighbors(i, j) < 2 || this.livingNeighbors(i,j) > 3){
            newBoard[i][j] = 0;
          }
        }
        else{ // dead
          if(livingN === 3){
            newBoard[i][j] = 1;
          }
        }
      }
    }
    this.board = newBoard;
  }
}