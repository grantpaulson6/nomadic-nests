import React from 'react';


const FilterDates = ({ closeModal }) => (
    <div id="filter-dates">
        <div className="date-left">
            <label htmlFor="filter-info-startdate">
                <span>CHECK-IN</span>
            </label>
            <input type="DATE"
                className="search-info"
                id="filter-info-startdate"
            />
        </div>
        <div className="date-right">
            <label htmlFor="filter-info-enddate">
                <span>CHECKOUT</span>
            </label>
            <input type="DATE"
                className="search-info"
                id="filter-info-enddate"
            />
        </div>
    </div>
)

export default FilterDates;