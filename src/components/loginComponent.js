import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";


// Importing actions
import {doLogin} from "../redux/actions/loginAction";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password: "",
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.data.loggedIn){
            this.setState({errmsg : ""})
            this.props.history.push('/planets')
        }
    }

    doLogin(){
      const {username, password} = this.state;
      this.props.doLogin(username, password)
    }
    onChange(e){
        const value = e.target.value;
        this.setState({[e.target.name] : value});
    }

    render() {
        return (
            <div className="login-box">
                <form>
                    <label htmlFor="username-login">
                        Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={(e) => this.onChange(e)}
                      id="username-login"
                    />
                    <label htmlFor="password-login">
                       Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={(e) => this.onChange(e)}
                      id="password-login"
                    />
                    <span className="error">
                        {this.props.data.errorMsg}
                    </span>
                    <button type="button" onClick={() => this.doLogin()}>
                       Login
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.loginData,
})

const mapDispatchToProps = dispatch => {
    return {
        doLogin: (username, password) => dispatch(doLogin(username, password))
    }
}

LoginComponent.propTypes = {
    doLogin: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)