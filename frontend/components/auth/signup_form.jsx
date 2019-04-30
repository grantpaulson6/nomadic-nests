import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            birthdate: "",
            about: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
        this.props.closeModal();
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleChange("username").bind(this)}
                        placeholder="Username"
                        className="session-info"
                    />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password").bind(this)}
                        placeholder="Create a Password"
                        className="session-info"
                    />
                    <input type="text"
                        value={this.state.first_name}
                        onChange={this.handleChange("first_name").bind(this)}
                        placeholder="First name"
                        className="session-info"
                    />
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.handleChange("last_name").bind(this)}
                        placeholder="Last name"
                        className="session-info"
                    />
                    <input type="email"
                        value={this.state.email}
                        onChange={this.handleChange("email").bind(this)}
                        placeholder="Email"
                        className="session-info"
                    />
                    {/* <input type="date"
                        value={this.state.birthdate}
                        onChange={this.handleChange("birthdate").bind(this)}
                    />
                    <select onChange={this.handleChange("gender").bind(this)}>
                        <option disabled selected>Gender</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                    <textarea onChange={this.handleChange("about").bind(this)}
                        value={this.state.about}>
                    </textarea> */}
                    <button className="auth-button">Sign Up</button>
                    <ul>{errors}</ul>
                </form>
                <div className="session-footer">
                    <span>Already have an account?</span>
                    <button className="link-button"
                        onClick={this.props.openLogin}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default SignupForm;