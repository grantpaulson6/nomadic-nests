import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import ListingsFormContainer from '../listings/listings_form_container';
import FilterDates from '../search/filter_dates';
import FilterNest from '../search/filter_nest';
import FilterGuests from '../search/filter_guests';
import FilterPriceContainer from '../search/filter_price_container';


const Modal = ({ modal, closeModal, changeFilter, filters }) => {
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
                            changeFilter={changeFilter}/>;
            break;
        case "filter guests":
            component = <FilterGuests closeModal={closeModal}
                            changeFilter={changeFilter}
                            guests={filters.guests}/>;
            break;
        case "filter nest":
            component = <FilterNest closeModal={closeModal}
                            changeFilter={changeFilter}/>;
            break;
        case "filter price":
            component = <FilterPriceContainer/>;
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
