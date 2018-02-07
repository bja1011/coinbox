/**
 * Created by adam on 05.02.18.
 */
import React, { Component } from 'react';
import {RaisedButton} from "material-ui";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index";


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        dashboard
        <RaisedButton label="Logout" onClick={this.props.onUserLogout}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserLogout: () => dispatch(actionCreators.logout()),
  }
};

export default connect(null, mapDispatchToProps)(Dashboard);
