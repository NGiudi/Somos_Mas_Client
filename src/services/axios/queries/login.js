import axiosClient from '../axiosClient';

export const loginUser = async (data) => {
  const res = await axiosClient.post('/auth/login', data);
  return res.data;
}

export const registerUser = async () => {
  const res = await axiosClient.post('/auth/register');
  return res.data;
}

export const getUser = async (token) => {
  const res = await axiosClient.get('/auth/me', { headers: { Authorization: token }});
  return res.data;
}