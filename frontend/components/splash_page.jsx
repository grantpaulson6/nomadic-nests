import React from 'react';


class SplashPage extends React.Component {


    render() {

        return (
            <div>
                <div className="splash-page-img">
                    <img src={window.splashImage} alt=""/>
                </div>
            </div>
        )
    }
}


export default SplashPage;