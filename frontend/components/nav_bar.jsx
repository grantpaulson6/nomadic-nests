import React from 'react';
import Link from 'react-router-dom';

class NavBar extends React.Component {


    render() {

        const left_nav = (
            <div className="left-nav">
                <div className="logo">
                    <h3>Nomadic Nests</h3>
                </div>
            </div>
        )
        if (this.props.currentUser) {
            return (
                <div className="main-nav">
                    { left_nav }
                    <nav className="right-nav">
                        <button>{this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</button>
                        <button onClick={this.props.logoutCurrentUser}>Log Out</button>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="main-nav">
                    { left_nav }
                    <nav className="right-nav">
                        <button onClick={() => this.props.openModal("signup")}>Sign Up</button>
                        <button onClick={() => this.props.openModal("login")}>Log In</button>
                    </nav>
                </div>
            )
        }
    }
}

export default NavBar;