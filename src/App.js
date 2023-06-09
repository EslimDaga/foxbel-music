import { useEffect, useState } from "react";
import { getSongs } from "./services/deezer";
import styled from "styled-components";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";

const MainContainer = styled.div`
	display: flex;
	height: 100vh;
`;

const App = () => {
	const [traks, setTraks] = useState([]);
	const [search, setSearch] = useState("");

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState(null);
	const [audio, setAudio] = useState(null);

	const [volume, setVolume] = useState(100);

	const handleSearch = e => {
		const { value } = e.target;
		setSearch(value);
		getSongs(value).then(response => {
			setTraks(response);
		});
	};

	const handleResetSearch = () => {
		setSearch("");
		getSongs().then(response => {
			setTraks(response);
		});
	};

	const handlePreviusTrack = () => {
		const index = traks.data.findIndex(track => track.id === currentTrack.id);
		if (index > 0) {
			audio.pause();

			setCurrentTrack(traks.data[index - 1]);

			const newAudio = new Audio(traks.data[index - 1].preview);
			setAudio(newAudio);
			newAudio.play();
		} else {
			audio.pause();

			setCurrentTrack(traks.data[traks.data.length - 1]);

			const newAudio = new Audio(traks.data[traks.data.length - 1].preview);
			setAudio(newAudio);
			newAudio.play();
		}
	};

	const handlePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const handleNextTrack = () => {
		const index = traks.data.findIndex(track => track.id === currentTrack.id);
		if (index < traks.data.length - 1) {
			audio.pause();

			setCurrentTrack(traks.data[index + 1]);

			const newAudio = new Audio(traks.data[index + 1].preview);
			setAudio(newAudio);
			newAudio.play();
		} else {
			audio.pause();

			setCurrentTrack(traks.data[0]);

			const newAudio = new Audio(traks.data[0].preview);
			setAudio(newAudio);
			newAudio.play();
		}
	};

	const handleCurrentTrack = track => {
		setCurrentTrack(track);
	};

	const handleVolume = e => {
		const { value } = e.target;
		setVolume(value);
	};

	const handleMuteSound = () => {
		if (volume > 0) {
			setVolume(0);
		} else {
			setVolume(100);
		}
	};

	useEffect(() => {
		getSongs().then(response => {
			setTraks(response);
		});
	}, []);

	useEffect(() => {
		if (isPlaying) {
			if (audio) {
				if (currentTrack.preview === audio.src) {
					audio.play();
					return;
				} else {
					audio.pause();
					const newAudio = new Audio(currentTrack.preview);
					setAudio(newAudio);
					newAudio.play();
				}
			} else {
				const newAudio = new Audio(currentTrack.preview);
				setAudio(newAudio);
				newAudio.play();
			}
		}

		if (!isPlaying) {
			if (audio) {
				audio.pause();
			}
		}

		if (!isPlaying && currentTrack?.preview !== audio?.src) {
			if (audio) {
				audio.pause();
			}

			const newAudio = new Audio(currentTrack.preview);
			setAudio(newAudio);
			newAudio.play();

			setIsPlaying(true);
		}

		return () => {
			if (audio) {
				audio.pause();
			}
		};
	}, [isPlaying, currentTrack, audio]);

	useEffect(() => {
		if (audio) {
			audio.addEventListener("ended", () => {
				setIsPlaying(false);
			});
		}
	}, [audio]);

	useEffect(() => {
		if (audio) {
			audio.volume = volume / 100;
		}
	}, [volume, audio]);

	return (
		<>
			<MainContainer>
				<Aside />
				<Content
					traks={traks}
					search={search}
					handleSearch={handleSearch}
					handlePlay={handlePlay}
					handleCurrentTrack={handleCurrentTrack}
					handleResetSearch={handleResetSearch}
					isPlaying={isPlaying}
					currentTrack={currentTrack}
				/>
			</MainContainer>
			<Footer
				currentTrack={currentTrack}
				isPlaying={isPlaying}
				handlePreviusTrack={handlePreviusTrack}
				handleNextTrack={handleNextTrack}
				handlePlay={handlePlay}
				handleVolume={handleVolume}
				handleMuteSound={handleMuteSound}
				volume={volume}
			/>
		</>
	);
};

export default App;
