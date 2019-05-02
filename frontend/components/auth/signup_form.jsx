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
        this.props.signup(user)
            .then(this.props.closeModal);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div>
                <i className="fas fa-times" onClick={this.props.closeModal}></i>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleChange("username").bind(this)}
                        placeholder="Username"
                        className="session-info"
                    />
                    {/* update tag? works right now */}
                    <div className="form-errors">{this.props.errors["username"]}</div>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password").bind(this)}
                        placeholder="Create a Password"
                        className="session-info"
                    />
                    <div className="form-errors">{this.props.errors["password"]}</div>
                    <input type="text"
                        value={this.state.first_name}
                        onChange={this.handleChange("first_name").bind(this)}
                        placeholder="First name"
                        className="session-info"
                    />
                    <div className="form-errors">{this.props.errors["first_name"]}</div>
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.handleChange("last_name").bind(this)}
                        placeholder="Last name"
                        className="session-info"
                    />
                    <div className="form-errors">{this.props.errors["last_name"]}</div>
                    <input type="email"
                        value={this.state.email}
                        onChange={this.handleChange("email").bind(this)}
                        placeholder="Email"
                        className="session-info"
                    />
                    <div className="form-errors">{this.props.errors["email"]}</div>
                    <input type="date"
                        value={this.state.birthdate}
                        onChange={this.handleChange("birthdate").bind(this)}
                        className="session-info placeholder"
                        placeholder="Birthdate"
                        
                    />
                    <div className="form-errors">{this.props.errors["birthdate"]}</div>
                    <select onChange={this.handleChange("gender").bind(this)}
                        className="session-info">
                        <option disabled selected>Gender</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                    <div className="form-errors">{this.props.errors["gender"]}</div>
                    <textarea onChange={this.handleChange("about").bind(this)}
                        value={this.state.about}
                        className="session-info"
                        placeholder="A little bit about yourself...">
                    </textarea>
                    <div className="form-errors">{this.props.errors["about"]}</div>
                    <button className="auth-button">Sign Up</button>
                </form>
                <div className="session-footer">
                    <span>Already have an account?</span>
                    <button className="link-button"
                        onClick={this.props.openLogin}>
                        Login
                    </button>
                </div>
                <div className="session-footer">
                    <span>Don't want to bother?</span>
                    <button className="link-button"
                        onClick={this.props.demoLogin}>
                        Demo Login
                    </button>
                </div>
            </div>
        )
    }
}

export default SignupForm;