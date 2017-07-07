import { Map as ImmutableMap } from 'immutable';
import { types } from '../actions/actions';

export default (state = ImmutableMap(), action) => {
  const { type, data } = action;

  switch (type) {
    case types.UPDATE_RHYTHM: {
      return state.set('rhythm', data);
    }
    case types.UPDATE_RHYTHM_AND_REACT_KEYS: {
      return state
                .set('rhythm', data.rhythm)
                .set('reactKeys', data.reactKeys)
                ;
    }
    case types.UPDATE_ANALYSIS: {
      return state.set('analysis', data);
    }
    default: {
      return state;
    }
  }
};
