import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import ListingsFormContainer from '../listings/listings_form_container';
import FilterDates from '../search/filter_dates';
import FilterNest from '../search/filter_nest';
import FilterGuests from '../search/filter_guests';
import FilterPriceContainer from '../search/filter_price_container';


const Modal = ({ modal, closeModal, changeFilter, changeFilterAndFetch, filters }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "login":
            component = <LoginFormContainer/>;
            break;
        case "signup":
            component = <SignupFormContainer />;
            break;
        case "create_listing":
            component = <ListingsFormContainer />;
            break;
        case "filter dates":
            component = <FilterDates closeModal={closeModal}
                            changeFilter={changeFilter}
                            start_date={filters.start_date}
                            end_date={filters.end_date}/>;
            break;
        case "filter guests":
            component = <FilterGuests closeModal={closeModal}
                            changeFilter={changeFilterAndFetch}
                            guests={filters.guests}/>;
            break;
        case "filter nest":
            component = <FilterNest closeModal={closeModal}
                changeFilter={changeFilterAndFetch}/>;
            break;
        case "filter price":
            component = <FilterPriceContainer
                changeFilter={changeFilterAndFetch}/>;
            break;
        case "booking":
            component = <h1>Booking complete, enjoy!</h1>
            break;
        default:
            return null;
    }
    return (
        <div className={"modal-background " + modal} onClick={closeModal}>
            <div className={"modal-child " + modal} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

export default Modal;
