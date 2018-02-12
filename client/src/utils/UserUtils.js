/**
 * Created by adam on 27.11.17.
 */
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_HOST;

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      apiUrl+'/auth/local',
      {
        identifier: username,
        password: password
      }
    )
      .then(
        (resp) => {
          localStorage.setItem('idToken', resp.data.idToken);
          localStorage.setItem('refreshToken', resp.data.refreshToken);
          localStorage.setItem('user', JSON.stringify(resp.data));
          resolve(resp)
        },
        (err) => {
          reject(err);
        }
      )
  })
};

export const isLogged = () => {
  return localStorage.getItem('user');
};

export const loggedUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const logout = () => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
}

export default login;
