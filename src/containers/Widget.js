import { connect } from 'react-redux';
import WidgetPresenter from '../presenters/WidgetPresenter';

const mapStateToProps = (state) => {
  const rhythmLength = state.has('analysis') ? state.get('analysis').rhythmLength : undefined;
  return { rhythmLength };
};

export default connect(mapStateToProps)(WidgetPresenter);
