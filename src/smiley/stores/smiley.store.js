import assign from 'object-assign';
import { EventEmitter } from 'events';

// Const
import { CHANGE_CONTENT, SELECT_SMILEY } from '../actions/smiley.const';

// Dispatcher
import { AppDispatcher } from '../../dispatcher/AppDispatcher';

const smileyList = [
  {
    id: 1,
    label: 'Happy',
    img: 'far fa-smile'
  },
  {
    id: 2,
    label: 'Meh',
    img: 'far fa-meh'
  },
  {
    id: 3,
    label: 'Frown',
    img: 'far fa-frown'
  }
];
let currentSmiley = {
  label: 'Happy',
  img: 'far fa-smile'
};

export const SmileyStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_CONTENT, callback);
  },

  removeChangeListener(callback) {
    this.remove(CHANGE_CONTENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_CONTENT);
  },

  getSmileyList() {
    return smileyList;
  },

  getCurrentSmiley() {
    return currentSmiley;
  }
});

SmileyStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case SELECT_SMILEY:
      currentSmiley = smileyList.find(smiley => smiley.id === action.id);
      SmileyStore.emitChange();
      break;
  }
});
