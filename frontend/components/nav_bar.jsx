import React from 'react';
import Link from 'react-router-dom';

class NavBar extends React.Component {


    render() {

        const left_nav = (
            <div className="left-nav">
                <div className="logo">
                    <i class="fas fa-fighter-jet"></i>
                </div>
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
                            <li><button>Settings</button></li>
                            <li><button>User Profile</button></li>
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
        if (this.props.navType === "splash") {
            return (
                <div className="main-nav splash">
                    { left_nav }
                    { right_nav }
                </div>
            )
        } else {
            return (
                <div className="filler-nav">
                    <div className="main-nav">
                        { left_nav }
                        { right_nav }
                    </div>
                </div>
            )
        }
    }
}

export default NavBar;