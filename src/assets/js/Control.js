let AI = () => {

  // private attribute: Level of intelligence the player has
  let levelOfIntelligence = level

  // private attribute: the game the player is playing
  let game = {}

  /*
   * private recursive function that computes the minmax value of a game state
   * @param state [State]: the state to calculate it's minmax value
   * @returns [Number]: the minmax value of the state
   */
  const minmaxValue = (state) => {

  }

  /*
   * private function : make the ai player take a blind move
   * that is: choose the cell to place it;s symbol randomly
   * @param turn [String]: the player to [play], either X or O
   */
  const takeABlindMove = (turn) => {

  }
  /*
   * private function: make the ai player make a novice move,
   * that is: mix between choosiing optimal and suboptimal minimum decision
   * @param turn [String]: the player to play, either X or O
   */
  const takeANoviceMove = (turn) => {

  }

  /*
   * private function: make the ai player take a master move,
   * that is: choose the optimal minmax deceision
   * @param turn [String]: the player to play, either X or O
   */
  const takeAMasterMove = (turn) => {

  }

  /*
   * public methods to specify the game the ai player will play
   * @param _game [Game]: the fame the ai wil play
   */
  this.plays = (_game) => {
    game = _game
  }

  /*
   * public function: notify the ai player it's it's turn
   * @param turn [String]: the player to play, either X or O
   */
  this.notify = (turn) => {
    switch (levelOfIntelligence) {
      case 'blind' : takeABlindMove(turn); break
      case 'novice' : takeANoviceMove(turn); break
      case 'master' : takeAMasterMove(turn); break
    }
  }
}
