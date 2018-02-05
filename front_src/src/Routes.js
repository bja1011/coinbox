/**
 * Created by adam on 05.02.18.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {
  AUTH_LOGIN_PATH, INDEX_PATH,
  SETTINGS_PATH
} from './constants/RouterConstants';
import {Redirect, Switch} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Dashboard/Dashboard';

const Routes = (props) => {

  let routes = (
    <Switch>
      <Route exact path={INDEX_PATH} component={Dashboard}/>
      <Route exact path={AUTH_LOGIN_PATH} component={Auth}/>
      <Route render={() => <Redirect to={AUTH_LOGIN_PATH}/>}/>
    </Switch>
  );
  //
  // if (props.auth) routes = (
  //   <Switch>
  //     <Route exact path={SETTINGS_PATH} component={Dashboard}/>
  //     <Route render={() => <Redirect to={INDEX_PATH}/>}/>
  //   </Switch>
  // )

  return (
    <div>
      {routes}
    </div>
  );
};

export default Routes;
