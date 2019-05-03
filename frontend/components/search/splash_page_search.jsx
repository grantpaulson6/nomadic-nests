import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashPageSearch extends React.Component {


    render() {


        return (
            <div className="search-box">
                <h1>Discover the nests of two nomads</h1>
                <div className="search-field">
                    <label htmlFor="search-info-where">
                        <span>WHERE</span>
                    </label>
                        <input type="text"
                        className="search-info"
                        id="search-info-where"
                        />
                </div>
                <div className="search-field date">
                    <div className="date-left">
                        <label htmlFor="search-info-startdate">
                            <span>CHECK-IN</span>
                        </label>
                        <input type="DATE"
                            className="search-info"
                            id="search-info-where"
                        />
                    </div>
                    <div className="date-right">
                        <label htmlFor="search-info-enddate">
                            <span>CHECKOUT</span>
                        </label>
                        <input type="DATE"
                            className="search-info"
                            id="search-info-where"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="search-field">
                    <label htmlFor="search-info-guests">
                        <span>GUESTS</span>
                    </label>
                    <input type="number"
                        className="search-info"
                        id="search-info-guests"
                    />
                </div>
                <button className="search-button"
                    onClick={() => this.props.history.push('/search/')}
                >Search</button>
            </div>
        )
    }
}

export default withRouter(SplashPageSearch);