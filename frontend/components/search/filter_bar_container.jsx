import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    filter_location: state.ui.filters.location
});

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterBar));