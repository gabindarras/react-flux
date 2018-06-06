import assign from 'object-assign';
import { EventEmitter } from 'events';

// Dispatcher
import { AppDispatcher } from '../../dispatcher/AppDispatcher';

// Const
import { CHANGE_CONTENT } from '../actions/weather.const';
import { SELECT_SMILEY } from '../../smiley/actions/smiley.const';

// Stores
import { SmileyStore } from '../../smiley/stores/smiley.store';

let weather = formatWeather();

export const WeatherStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_CONTENT, callback);
  },

  removeChangeListener(callback) {
    this.remove(CHANGE_CONTENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_CONTENT);
  },

  getWeather() {
    return weather;
  }
});

function formatWeather() {
  const smiley = SmileyStore.getCurrentSmiley();
  switch (smiley.label) {
    case 'Happy':
      return 'Je suis content donc il fait très beau !!!';
    case 'Meh':
      return 'Il y a quelques nuages car je suis normal';
    case 'Frown':
      return 'Je suis triste donc il pleut !!!';
  }
}

WeatherStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case SELECT_SMILEY:
      AppDispatcher.waitFor([SmileyStore.dispatchToken]);
      weather = formatWeather();
      WeatherStore.emitChange();
      break;
  }
});
