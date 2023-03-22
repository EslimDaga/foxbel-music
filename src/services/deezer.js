import api from "./api";

export const getSongs = async artist => {
	const response = await api.get("/search", {
		params: {
			q: artist || "grupo 5",
		},
	});
	return response.data;
};
