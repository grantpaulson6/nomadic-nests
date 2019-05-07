import React from 'react';

const BookingBox = ({price}) => (
    <div className="booking-box">
        <div className="price">${price}
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
        <button className="booking-button">Book</button>
    </div>
);

export default BookingBox;