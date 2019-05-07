import React from 'react';


const FilterPrice = ({ closeModal }) => (
    <div id="filter-price">
        <div className="search-field">
            <label htmlFor="filter-info-price">
                <span>Max Price</span>
            </label>
            <input type="number"
                className="search-info"
                id="filter-info-price"
            />
        </div>
    </div>
)

export default FilterPrice;