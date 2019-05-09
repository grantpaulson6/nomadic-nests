import React from 'react';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/bookings_actions';
import { openModal } from '../../actions/modal_actions';

class BookingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: null,
            end_date: null
        };
        this.requireLoginMessage = null;
        this.bookedDaysTabulated = this.bookedDays();
    }

    componentDidUpdate() {
        this.bookedDaysTabulated = this.bookedDays();
    }

    handleDatePick(field) {

        return (value) => {
            this.setState({ [field]: value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.current_user) {
            this.requireLoginMessage = null;
            this.props.createBooking({ start_date: this.state.start_date, end_date: this.state.end_date, listing_id: this.props.listingId })
                .then(this.props.openModal);
        } else {
            this.requireLoginMessage = "You must be logged in to make a booking";
            this.forceUpdate();
        }
    }

    disableBookedDays({ activeStartDate, date, view }) {
        return this.bookedDaysTabulated[date] != undefined;
    }

    bookedDays() {
        if (this.props.bookings[0] == undefined) {
            return {};
        }
        const bookings = this.props.bookings;
        const bookedDays = {};
        bookings.forEach( booking => {

            let day = new Date(booking.start_date);
            day = this.addDay(day.setHours(0, 0, 0, 0));
            let end_day = new Date(booking.end_date);
            end_day = this.addDay(end_day.setHours(0, 0, 0, 0));

            while (day <= end_day) {
                bookedDays[day] = true;
                day = this.addDay(day);
            }
        });
        return bookedDays;
    }

    addDay(date) {
        const result = new Date(date);
        result.setDate(result.getDate() + 1);
        return result;
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
                        <DatePicker
                            tileDisabled={this.disableBookedDays.bind(this)}
                            onChange={this.handleDatePick("start_date").bind(this)}
                            value={this.state.start_date}
                        />
                    </div>
                    <div className="date-right">
                        <label htmlFor="booking-info-enddate">
                            <span>CHECKOUT</span>
                        </label>
                        <DatePicker
                            tileDisabled={this.disableBookedDays.bind(this)}
                            onChange={this.handleDatePick("end_date").bind(this)}
                            value={this.state.end_date}
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
                <div className="form-errors">{this.props.errors["booking"]}</div>
                <div className="form-errors">{this.requireLoginMessage}</div>
                <button className="booking-button">Book</button>
            </form>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.booking,
    bookings: state.entities.listings[ownProps.listingId].booking_ids.map( booking_id => state.entities.bookings[booking_id]),
    current_user: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
    createBooking: booking => dispatch(createBooking(booking)),
    openModal: () => dispatch(openModal("booking"))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingBox);