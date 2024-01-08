import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

export const registrationApi = async body => {
  const { data } = await api.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const logInApi = async body => {
  const { data } = await api.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const logOutApi = async () => {
  const { data } = await api.post('/users/logout');
  return data;
};

export const refreshApi = async () => {
  const { data } = await api.get('/users/current');
  return data;
};
