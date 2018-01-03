/*
 * Represents a state in the game
 * @param oldState [State]: old state to initialize the new state
 */

 let State = (oldState) => {
  // public the player who has the turn to play
  this.turn = ""

  // public : the number of moves of the AI
  this.oMovesCount = 0

  // public : the result of the game in the State
  this.result = "still running"

  // public : the board configuration in this state
  this.board = []

  /* Begin Object Construction */
  if(typeOf oldState !== "undefined") {
    let len = oldState = olState.board.length
    this.board = new Array(len)

    for(var itr = 0; it < len; itr++) {
      this.board[itr] = old.board[itr]
    }

    this.oMovesCount = oldState.oMovesCount
    this.result = oldState.result
    this.turn = old.turn
  }

  // public : advances the turn in the state
  this.advanceTurn = () => {
    this.turn = this.turn == "X" ? "O" : "X"
  }

  /*
   * public function that enumerates the empty cell in the state
   * @ return [Array]: indices of all emty cells
   */
  this.emptyCells = () => {
    let indxs = []
    for(var itr = 0; itr < 9; itr++) {
      if( this.board[itr] === "E" ) {
        indxs.push(itr)
      }
    }
    return indxs
  }

  /*
   * public function that checks if the state is a terminal state or not
   * the state result is updated to reflect the result of the game
   * @return [Boolean]: true is it's terminal, false otherwise
   */
  this.isTerminal = () => {
    let B = this.board

    // check rows
    for( var i = 0; i <= 6; i = i +3 ) {
      if( B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
        this.result = `${B[i]} won` // update the state result
        return true
      }
    }

    // checks columns
    for (var i = 0; i <= 2; i++) {
      if (B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
        this.result = B[i] + "-won"; //update the state result
        return true;
      }
    }

    //check diagonals
    for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
      if (B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2 * j]) {
        this.result = B[i] + "-won"; //update the state result
        return true;
      }
    }

    var available = this.emptyCells();
    if (available.length == 0) {
      //the game is draw
      this.result = "draw"; //update the state result
      return true;
    } else {
      return false;
    }
  }
 }
