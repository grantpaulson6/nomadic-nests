import { closeModal } from '../../actions/modal_actions';
import { filtersAndFetch } from '../../actions/filters_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => ({
    modal: state.ui.modal,
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    changeFilter: filters => dispatch(filtersAndFetch(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);