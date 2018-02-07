/**
 * Created by adam on 27.11.17.
 */
import axios from 'axios';

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.post(
      'http://bearsoft.pl:1337/auth/local',
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
