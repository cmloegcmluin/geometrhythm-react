import { connect } from 'react-redux';
import WidgetPresenter from '../presenters/WidgetPresenter';

const mapStateToProps = (state) => ({ rhythm: state.get('rhythm') });

export default connect(mapStateToProps)(WidgetPresenter);
