import axiosClient from "../axiosClient";

export const getAboutUsData = async () => {
	const res = await axiosClient.get("/about-us");
	return res.data;
};