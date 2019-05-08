import * as APIUtil from '../util/bookings_util';
import { receiveListing } from './listings_actions';
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";


export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});


export const createBooking = (booking) => dispatch => (
    APIUtil.createBooking(booking).then(payload => dispatch(receiveListing(payload)),
        errors => dispatch(receiveBookingErrors(errors.responseJSON)))
);