import React from 'react';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/bookings_actions';

class BookingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: null,
            end_date: null
        };
    }

    handleDatePick(value) {
        // const date = value.getFullYear() +"-" + (value.getMonth() + 1) + "-" + value.getDate();
        this.setState({start_date: value[0], end_date: value[1]});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBooking({ start_date: this.state.start_date, end_date: this.state.end_date, listing_id: this.props.listingId });
    }
    render() {
        
        return (
            <form className="booking-box"
                onSubmit={this.handleSubmit.bind(this)}>
                <div className="price">${this.props.price}
                    <span className="span"> per night</span>
                </div>


                <div className="booking-field date">
                    <div className="date-left">
                        <label htmlFor="booking-info-startdate">
                            <span>CHECK-IN</span>
                        </label>
                        <input type="DATE"
                            className="booking-info"
                            id="booking-info-where"
                        />
                    </div>
                    <div className="date-right">
                        <label htmlFor="booking-info-enddate">
                            <span>CHECKOUT</span>
                        </label>
                        <input type="DATE"
                            className="booking-info"
                            id="booking-info-where"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="booking-field">
                    <label htmlFor="booking-info-guests">
                        <span>GUESTS</span>
                    </label>
                    <input type="number"
                        className="booking-info"
                        id="booking-info-guests"
                    />
                </div>
                <DatePicker 
                    // tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p float="right">X</p> : null}
                    tileDisabled={({ activeStartDate, date, view }) => date.getDay() === 0}
                    // onClickDay={this.handleDatePick.bind(this)}
                    onChange={this.handleDatePick.bind(this)}
                    // returnValue={this.state.start_date}
                    selectRange={true}
                    value={this.state.start_date}
                    />
                <div className="form-errors">{this.props.errors["booking"]}</div>
                <button className="booking-button">Book</button>
            </form>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.booking,
});

const mapDispatchToProps = (dispatch) => ({
    createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingBox);