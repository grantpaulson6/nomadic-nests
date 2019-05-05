import { createListing } from '../../actions/listings_actions';
import { connect } from 'react-redux';
import ListingsForm from './listings_form';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.listing,
    new_listing: state.ui.new_listing
});

const mapDispatchToProps = (dispatch) => ({
    createListing: listing => dispatch(createListing(listing)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsForm));