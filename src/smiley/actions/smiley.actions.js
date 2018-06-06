// Const
import { SELECT_SMILEY } from './smiley.const';

// Dispatcher
import { AppDispatcher } from '../../dispatcher/AppDispatcher';

export const SmileyActions = {
  selectSmiley(selectedSmileyId) {
    AppDispatcher.dispatch({
      actionType: SELECT_SMILEY,
      id: selectedSmileyId
    });
  }
};
