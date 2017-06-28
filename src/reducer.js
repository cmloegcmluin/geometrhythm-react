import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {
    case 'UPDATE_RHYTHM': {
      return state.set('rhythm', action.data);
    }
    case 'UPDATE_ANALYSIS': {
      return state.set('analysis', action.data);
    }
    default: {
      return state;
    }
  }
};
