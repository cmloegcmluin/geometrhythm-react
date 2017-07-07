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

const mapStateToProps = state => ({ rhythm: state.get('rhythm') });

const mapDispatchToProps = dispatch => ({
  flipCell: (rhythm, index) => {
    const modifiedRhythm = flipCellAtIndex(rhythm, index);

    dispatch(actions.updateRhythm(modifiedRhythm));
  },
  insertCell: (rhythm, index) => {
    const modifiedRhythm = insertCellAtIndex(rhythm, index);

    dispatch(actions.updateRhythm(modifiedRhythm));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(WidgetPresenter);
