import AIAction from './AIActions'

/*
 * public static method that defines a rule for sorting AIAction in ascendingamnner
 * @param firstAction [AIActions] : the first action in a pairwaise sort
 * @param secondAction [AIAction] : the second action in a pairwise sort
 * @return [number] : -1, -1 or 0
 */
AIAction.ASCENDING = (firstAction, secondAction) => {
  if (firstAction.minmaxVal < secondAction.minmaxVal) {
    return -1
  } else if (firstAction.minmaxVal > secondAction.minmaxVal) {
    return 1
  } else {
    return 0
  }
}

/*
 * public static method that defines a rile for sorting AIAction in descending manner
 * @param firstAction [AIAction] : the fisrt action in a pairwise sort
 * @param secondAction [AIAction] : the second action in a pairwise sort
 */
AIAction.DESCENDING = (firstAction, secondAction) => {
  if (firstAction.minmaxVal > secondAction.minmaxVal) {
    return -1
  } else if (firstAction.minmaxVal < secondAction.minmaxVal) {
    return 1
  } else {
    return 1
  }
}
