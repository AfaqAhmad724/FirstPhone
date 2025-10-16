import axios from 'axios';
import Config from './Config';

export const configAxiosHeaders = async token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';

export const requests = {
  get: url => axios.get(`${Config.baseURL}${url}`),
  get1: (url, config) => axios.get(`${Config.baseURL}${url}`, config),
  post: (url, data) => axios.post(`${Config.baseURL}${url}`, data),
  delete: (url, id) => axios.delete(`${Config.baseURL}${url}`, id),
  deletes: url => axios.delete(`${Config.baseURL}${url}`),
};

const Api = {
  register: data => requests.post('register', data),
  verifyOtp: data => requests.post('verifyOtp', data),
  login: data => requests.post('login', data),
  forgotPassword: data => requests.post('forgot-password/reset', data),
};

export default Api;
