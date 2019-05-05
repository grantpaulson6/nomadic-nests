import React from 'react';
import SearchContainer from './search/search_container';

class SplashPage extends React.Component {


    render() {

        return (
            <div>
                <div className="splash-page-img">
                    <SearchContainer />
                </div>
            </div>
        )
    }
}


export default SplashPage;