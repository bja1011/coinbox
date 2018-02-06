import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import userReducer from './store/reducers/user';
import {Provider} from "react-redux";
import {MuiThemeProvider} from "material-ui";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer);//,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
