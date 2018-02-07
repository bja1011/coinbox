import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event,key) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
  }

  render() {
    const username = this.state.username;
    const password = this.state.password;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit.bind(this)}
        onError={errors => console.log(errors)}
      >
        <TextValidator
          floatingLabelText="Username"
          onChange={(event) => this.handleChange(event, 'username')}
          name="username"
          value={username}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <TextValidator
          floatingLabelText="Password"
          onChange={(event) => this.handleChange(event, 'password')}
          name="password"
          type="password"
          value={password}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <br/>
        <RaisedButton primary={true}
                      type="submit"
                      label="Login"
        />
      </ValidatorForm>
    );
  }
}

export default LoginForm;
