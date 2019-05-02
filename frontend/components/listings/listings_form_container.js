import { createListing } from '../../actions/listings_actions';
import { connect } from 'react-redux';
import ListingsForm from './listings_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.listing
});

const mapDispatchToProps = (dispatch) => ({
    createListing: listing => dispatch(createListing(listing)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);