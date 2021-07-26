import axiosClient from '../axiosClient';

export const getNewsData = async (page) => {
  const res = await axiosClient.post('/news', { page });
  return res.data;
}