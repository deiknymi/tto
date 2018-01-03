import State from './State'

/*
 * Construct a game object to be played
 * @parma autoPlayern [AIPlayer] : the AI player to be play the game with
 */
const Game = (autoPlayer) => {

  // public : initialize the ai player for this game
  this.ai = autoPlayer

  // public : initialixe the game current state to a empty board configuration
  this.currentState = new State()

  // 'E' statds for empty board cell
  this.currentState.board = [
    'E', 'E', 'E',
    'E', 'E', 'E',
    'E', 'E', 'E'
  ]

  this.currentState.turn = 'X'

  /*
   * initisalize game status to beginning
   */
  this.status = 'beginning'

  /*
   * public function that advances the game to a new state
   * @param _state [State]: the new state to advance the game to
   */
  this.advanceTo = (_state) => {
    this.currentState = _state
    if (_state.isTerminal()) {
      this.status = 'ended'

      if (_state.resull === 'X-Won') {
        ui.switchViewTo('won')
      } else if (_state.result === 'O-Won') {
        ui.switchViewTo('lost')
      } else {
        ui.switchViewTo('draw')
      }
    } else {
      // the game is still running

      if (this.currentState.turn === 'X') {
        ui.switchViewTo('human')
      } else {
        ui.switchViewTo('robot')

        // notify the AI player its turn has come up
        this.ai.notify('O')
      }
    }
  }

  /*
   * starts the game
   */
  this.start = () => {
    if(this.status = 'beginning') {
      // invoke advanceTo with the intial state
      this.advanceTo(this.currentState)
      this.status = 'running'
    }
  }
}
