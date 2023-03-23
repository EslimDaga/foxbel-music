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

	const handlePlay = () => {
		setIsPlaying(!isPlaying);
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

		return () => {
			if (audio) {
				audio.pause();
			}
		};
	}, [isPlaying]);

	useEffect(() => {
		if (!isPlaying && currentTrack) {
			const newAudio = new Audio(currentTrack.preview);
			setAudio(newAudio);
			setIsPlaying(true);
		}
	}, [currentTrack]);

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
					isPlaying={isPlaying}
					handleCurrentTrack={handleCurrentTrack}
					currentTrack={currentTrack}
				/>
			</MainContainer>
			<Footer
				currentTrack={currentTrack}
				isPlaying={isPlaying}
				handlePlay={handlePlay}
				handleVolume={handleVolume}
				handleMuteSound={handleMuteSound}
				volume={volume}
			/>
		</>
	);
};

export default App;
