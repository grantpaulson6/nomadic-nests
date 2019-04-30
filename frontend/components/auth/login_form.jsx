import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
        this.props.closeModal();
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        const errors = this.props.errors.map( (error,i) => <li key={i}>{error}</li>)
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username").bind(this)}
                            placeholder="Username"
                            className="session-info"
                        />
                    </div>
                    <div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password").bind(this)}
                            placeholder="Password"
                            className="session-info"
                        />
                    </div>
                    <button className="auth-button">Log In</button>
                    <ul>{errors}</ul>
                </form>
                <div className="session-footer">
                    <span>Don't have an account?</span>
                    <button className="link-button"
                        onClick={this.props.openSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        )
    }
}

export default LoginForm;