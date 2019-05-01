import { createListing } from '../../actions/listings_actions';
import { connect } from 'react-redux';
import ListingsForm from './listings_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.listings
});

const mapDispatchToProps = (dispatch) => ({
    createListing: listing => dispatch(createListing(listing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);