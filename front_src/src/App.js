import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Header from "./containers/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.user ? <Header user={this.props.user}/> : null}
        <div>
          <Routes auth={this.props.user}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data
  };
};

export default withRouter(connect(mapStateToProps)(App));
