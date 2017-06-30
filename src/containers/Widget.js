import { connect } from 'react-redux';
import WidgetPresenter from '../presenters/WidgetPresenter';

const mapStateToProps = state => {
  const length = state.get('analysis').length
  return { length }
};

export default connect(mapStateToProps)(WidgetPresenter);
