import { changeFilter } from '../../actions/filters_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FilterPrice from './filter_price';

const mapStateToProps = (state, ownProps) => ({
    max_price: state.ui.filters.max_price,
    min_price: state.ui.filters.min_price
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);