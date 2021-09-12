import axiosClient from "../axiosClient";

export const getActivities = async () => {
	const res = await axiosClient.get("/activities");
	return res.data;
};