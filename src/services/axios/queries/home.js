import axiosClient from '../axiosClient';

export const getHomeData = async () => {
  const res = await axiosClient.get('/home');
  return res.data;
}