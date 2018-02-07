/**
 * Created by adam on 05.02.18.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Paper, RaisedButton, TextField} from "material-ui";
import PropTypes from 'prop-types';
import * as actionCreators from "../../store/actions/index";
import _ from 'lodash';

const style = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Auth extends Component {

  state = {
    loading: false,
    loginForm: {
      username: {
        elementConfig: {
          type: 'input',
          label: 'Username',
          name: 'username'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true,
        }
      },
      password: {
        elementConfig: {
          type: 'password',
          label: 'Password',
          name: 'password'
        },
        value: '',
        valid: false,
        dirty: false,
        validation: {
          required: true
        }
      }
    },
    loginFormValid: false,
  };

  checkValidity(value, rules) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    return isValid;
  }

  inputChangeHandler(event, inputId) {
    let newLoginForm = _.cloneDeep(this.state.loginForm);
    let field = newLoginForm[inputId];
    field.value = event.target.value;
    field.dirty = true;
    field.valid = this.checkValidity(field.value, field.validation);

    let formIsValid = true;
    Object.keys(this.state.loginForm).map((key) => {
      formIsValid = formIsValid && this.state.loginForm[key].valid;
    });

    this.setState({
      loginForm: newLoginForm,
      loginFormValid: formIsValid
    })
  }

  render() {
    return (
      <div className="Auth">
        <Paper style={style} zDepth={5}>
          <TextField
            hintText="Hint Text"
            onChange={(event) => this.inputChangeHandler(event, 'username')}
            // errorText="This field is required"
          />
          <TextField
            type="password"
            hintText="Hint Text"
            onChange={(event) => this.inputChangeHandler(event, 'password')}

            // errorText="The error text can be as long as you want, it will wrap."
          />
          <RaisedButton
            label="Login"
            primary={true}
            onClick={()=>{this.submitLoginForm()}}
          />
        </Paper>
      </div>
    );
  }

  submitLoginForm() {
    // event.preventDefault();
    this.props.onAuthStart();
    let formData = {};
    Object.keys(this.state.loginForm).map((key) => {
      formData[key] = this.state.loginForm[key].value;
    });
    this.props.onAuth(formData);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    loading: state.user.loading,
    error: state.user.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (userData) => dispatch(actionCreators.auth(userData)),
    onAuthStart: () => dispatch(actionCreators.authStart())
  }
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
