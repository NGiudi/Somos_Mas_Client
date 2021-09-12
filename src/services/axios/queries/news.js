import axiosClient from "../axiosClient";

export const getNewsData = async (page) => {
	const res = await axiosClient.post("/news", { page });
	return res.data;
};

export const getNewPost = async (id) => {
	const res = await axiosClient.get(`/news/${id}`);
	return res.data;
};