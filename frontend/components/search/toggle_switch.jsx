import React from 'react';

// https://proto.io/freebies/onoff/ for toggle switch
const ToggleSwitch = ({ handleMapToggle }) => (
    <div className="onoffswitch">
        <input type="checkbox"
            name="onoffswitch"
            className="onoffswitch-checkbox"
            id="myonoffswitch"
            onChange={handleMapToggle}
            defaultChecked />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
        </label>
    </div>
)

export default ToggleSwitch;