import axiosClient from '../axiosClient';

export const getOrganizationData = async () => {
  const res = await axiosClient.get('/organizations');
  return res.data;
}