import { Map as ImmutableMap } from 'immutable';
import { types } from '../actions/actions';

export default (state = ImmutableMap(), action) => {
  switch (action.type) {
    case types.UPDATE_RHYTHM: {
      return state.set('rhythm', action.data);
    }
    case types.UPDATE_ANALYSIS: {
      return state.set('analysis', action.data);
    }
    default: {
      return state;
    }
  }
};
