import { connect } from 'react-redux';
import WidgetPresenter from '../presenters/WidgetPresenter';
import { types } from '../actions/actions';


const flipCellAtIndex = (rhythm, index) => {
  const splitRhythm = rhythm.split('');
  splitRhythm[index] = splitRhythm[index] === 'x' ? '-' : 'x';
  return splitRhythm.join('');
};

const mapStateToProps = state => ({ rhythm: state.get('rhythm') });

const mapDispatchToProps = dispatch => ({

  flipRhythmCell: (rhythm, index) => {
    const modifiedRhythm = flipCellAtIndex(rhythm, index);

    dispatch({
      type: types.UPDATE_RHYTHM,
      data: modifiedRhythm,
    });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(WidgetPresenter);
