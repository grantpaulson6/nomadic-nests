import React from 'react';
import SearchContainer from './search/search_container';
import FilterBarContainer from './search/filter_bar_container';

//filler nav bar kind of hacky
class NavBar extends React.Component {


    render() {

        let search_box;
        let filter_bar;
        let sticky = null;
        if (this.props.location.pathname === "/") {
            search_box = null;
            filter_bar = null;
        } else {
            search_box = <SearchContainer />;
            filter_bar = <FilterBarContainer />;
            if (this.props.location.pathname.includes("listings")) {
                sticky = "sticky";
            }
        }
        const left_nav = (
            <div className="left-nav">
                <div className="logo">
                    {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    <div className="main-logo"
                        onClick={() => this.props.history.push('/')}
                    ></div>
                </div>
                { search_box }
            </div>
        )
        
        let right_nav;
        if (this.props.currentUser) {
            right_nav = (
                <nav className="right-nav">
                    <div className="right-nav-el">
                        <button className="dropdown-parent">{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</button>
                        <ul className="user-options">
                            <li><button onClick={() => this.props.openModal("create_listing")}>Add your Nest!</button></li>
                            {/* <li><button>Settings</button></li>
                            <li><button>User Profile</button></li> */}
                        </ul>
                    </div> 
                    <div className="right-nav-el">
                        <button className="dropdown-parent">Creator Info</button>
                        <ul className="user-options creator">
                            <li><a href="https://github.com/grantpaulson6/nomadic-nests-full-stack-project">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/grant-paulson-2554a640/">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="right-nav-el">
                        <button onClick={this.props.logout}>Log Out</button>
                    </div>
                </nav>
            )
        } else {
            right_nav = (
                <nav className="right-nav">
                    <div className="right-nav-el">
                        <button onClick={() => this.props.openModal("signup")}>Sign Up</button>
                    </div>
                    <div className="right-nav-el">
                        <button onClick={() => this.props.openModal("login")}>Log In</button>
                    </div>
                </nav>
            )
        }
        if (this.props.location.pathname === "/") {
            return (
                <div className="main-nav splash">
                    { left_nav }
                    { right_nav }
                </div>
            )
        } else {
            return (
                <div className="filler-nav">
                    <div className={`main-nav ${sticky}`}>
                        { left_nav }
                        { right_nav }
                    </div>
                    { filter_bar }
                </div>
            )
        }
    }
}

export default NavBar;