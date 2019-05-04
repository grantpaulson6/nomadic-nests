import React from 'react';
import SplashPageSearch from './search/search_container';

class SplashPage extends React.Component {


    render() {

        return (
            <div>
                <div className="splash-page-img">
                    <SplashPageSearch />
                </div>
            </div>
        )
    }
}


export default SplashPage;