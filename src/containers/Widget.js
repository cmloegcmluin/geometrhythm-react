import { connect } from 'react-redux';
import WidgetPresenter from '../presenters/WidgetPresenter';
import actions from '../actions/actions';


const flipCellAtIndex = (rhythm, index) => {
  const splitRhythm = rhythm.split('');
  splitRhythm[index] = splitRhythm[index] === 'x' ? '-' : 'x';
  return splitRhythm.join('');
};

const insertCellAtIndex = (rhythm, index) => {
  const splitRhythm = rhythm.split('');
  splitRhythm.splice(index + 1, 0, '-');
  return splitRhythm.join('');
};

const insertKeyAtIndex = (reactKeys, index) => {
  const newKey = reactKeys.reduce((a, b) => Math.max(a, b)) + 1;
  reactKeys.splice(index + 1, 0, newKey);
  return reactKeys;
};

const mapStateToProps = state => ({
  rhythm: state.get('rhythm'),
  reactKeys: state.get('reactKeys'),
});

const mapDispatchToProps = dispatch => ({
  flipCell: (rhythm, index) => {
    const modifiedRhythm = flipCellAtIndex(rhythm, index);

    dispatch(actions.updateRhythm(modifiedRhythm));
  },
  insertCell: (rhythm, index, reactKeys) => {
    const modifiedRhythm = insertCellAtIndex(rhythm, index);

    const modifiedReactKeys = insertKeyAtIndex(reactKeys, index);

    dispatch(actions.updateRhythm(modifiedRhythm, modifiedReactKeys));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(WidgetPresenter);
