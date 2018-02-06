/**
 * Created by adam on 05.02.18.
 */
import React, {Component} from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";

const style = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Paper style={style} zDepth={5}>
          <TextField
            hintText="Hint Text"
            // errorText="This field is required"
          />
          <TextField
            type="password"
            hintText="Hint Text"
            // errorText="The error text can be as long as you want, it will wrap."
          />
          <RaisedButton
            label="Login"
            primary={true}
            onClick={()=>{}}
          />
        </Paper>
      </div>
    );
  }
}

export default Auth;
