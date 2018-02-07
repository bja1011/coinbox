/**
 * Created by adam on 05.02.18.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Paper, RaisedButton, TextField} from "material-ui";
import PropTypes from 'prop-types';
import * as actionCreators from "../../store/actions/index";
import _ from 'lodash';
import LoginForm from "../../components/LoginForm";
import styled from "styled-components";


const style = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const LoginContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Logo = styled.div`
margin-top: -100px;
text-align: center;
color: #fff;
`;


// const LoginBox = styled.div`
// display: flex;
// width: 100%;
// height: 100vh;
// `

class Auth extends Component {

  render() {
    return (
      <div className="Auth full-height">
        <LoginContainer>
          <Logo>
            <h1>COINBOOK</h1>
          </Logo>
          <Paper style={style} zDepth={5}>
            <LoginForm onSubmit={this.submitLoginForm.bind(this)}/>
          </Paper>
        </LoginContainer>
      </div>
    );
  }

  submitLoginForm(formData) {
    this.props.onAuth(formData);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    loading: state.user.loading,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (userData) => dispatch(actionCreators.auth(userData)),
    onAuthStart: () => dispatch(actionCreators.authStart())
  };
};

// Auth.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
