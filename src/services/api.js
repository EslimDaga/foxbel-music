import axios from "axios";

const api = axios.create({
	baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
	headers: {
		"X-RapidAPI-Key": "fed3f3d927mshbca68d27409661ap1bc7f0jsn7d6516e80d14",
		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
	},
});

export default api;
