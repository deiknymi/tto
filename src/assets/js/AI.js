/**
 * State class evaluates the state of the game
 * @param oldState [State]
 */
class Score {
  costructor (oldState) {
    this.player = oldState.player
    this.state  = oldState.state
  }


}

class State {
  constructor( oldState ) {
    this.result = ''
    this.player = ''
    this.state  = ''
    this.board  = oldState.board
  }

  checkRows () {
    for ( var i = 0; i < 6; i = i + 3 ) {
      if ( this.board[i] === this.board[i+1] && this.board[i + 1] == this.board[i + 2] ) {
        return true
      }
    }
  }

  checkColumns () {
    for ( var i = 0; i < 3; i++ ) {
      if ( this.board[i] == this.board[i + 3] && this.board[i + 3] === this.board[i + 6] ) {
        return true
      }
    }
  }

  checkDiagonals () {
    if ( this.board[0] === this.board[4] && this.board[4] === this.board[8] ) {
      return true
    } else if ( this.board[2] === this.board[4] && this.board[4] === this.board[6] ) {
      return true
    }
  }

  isTerminal () {
    let flag = false
    for ( var i = 0; i < 9; i++ ) {
      if ( this.board[i] === 'E' ) {
        flag = false
      }
    }

    return flag
  }

  getState () {
    if ( this.checkColumns || this.checkDiagonals || this.checkRows ) {
      this.state = 'Won'
      return `${ this.player }`
    } else if( this.isTerminal ) {
      this.state = 'Terminal'
      return 'Draw'
    } else {
      this.state = 'Still Running'
      return this.state
    }
  }
}
