import api from "./api";

export const getChart = async () => {
	const response = await api.get("chart");
	return response.data;
};
