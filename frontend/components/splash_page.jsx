import React from 'react';
import SplashPageSearch from './search/splash_page_search';

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