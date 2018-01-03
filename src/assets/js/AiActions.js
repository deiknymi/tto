/*
 * Constructs an action that the ai player could make
 * @param pos [Number]: the cell position the ai would make its action
 * made that action
 */

const AIAction = (pos) => {
  // public : the position on the board that the action would put the letter on
  this.movePosition = pos

  // public : the minmax value of the state that the action leads to when
  this.minmaxVal = 0

  /*
   * public : applies the action to a state to get the next state
   * @param state [State] : the state to aplpy the action to
   * @return [State]: the next state
   */
  this.applyTo = (state) => {
    let next = new State(state)

    // put the letter on the board
    next.board[this.movePosition] = state.turn

    if (state.Tuen === '0') {
      next.oMovesCount++
    }

    next.advanceTurn()

    return next
  }
 }
