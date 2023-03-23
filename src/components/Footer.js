import {
	FaStepBackward,
	FaPlay,
	FaStepForward,
	FaVolumeUp,
	FaPause,
	FaVolumeDown,
	FaVolumeMute,
} from "react-icons/fa";
import FooterStyledComponent from "./FooterStyledComponent";

const Footer = ({
	isPlaying,
	currentTrack,
	handleVolume,
	volume,
	handlePlay,
	handlePreviusTrack,
	handleNextTrack,
	handleMuteSound,
}) => {
	return (
		<FooterStyledComponent>
			<div className="now-playing-widget">
				<img
					src={currentTrack?.album.cover_medium || "images/picture.png"}
					alt="Album cover"
					width={100}
					height={100}
				/>
				<div className="now-playing-widget__info">
					<p>
						{currentTrack?.title_short.length > 8
							? currentTrack?.title_short.substring(0, 8) + "..."
							: currentTrack?.title_short || "Canción"}
					</p>
					<span>
						{currentTrack?.artist.name || "Artista"} -{" "}
						{currentTrack?.album.title.length > 5
							? currentTrack?.album.title.substring(0, 5) + "..."
							: currentTrack?.album.title || "Álbum"}
					</span>
				</div>
			</div>
			<div className="player-controls">
				<button
					onClick={() => currentTrack && isPlaying && handlePreviusTrack()}
					className="control-button-skip-back"
				>
					<FaStepBackward />
				</button>
				<button
					className="control-button-playpause"
					onClick={() => {
						currentTrack && handlePlay();
					}}
				>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
				<button
					onClick={() => currentTrack && isPlaying && handleNextTrack()}
					className="control-button-skip-forward"
				>
					<FaStepForward />
				</button>
			</div>
			<div className="volume-bar-widget">
				<input
					type="range"
					min={0}
					max={100}
					onChange={handleVolume}
					value={volume}
				/>
				<button>
					{volume < 1 ? (
						<FaVolumeMute onClick={handleMuteSound} />
					) : volume > 50 ? (
						<FaVolumeUp onClick={handleMuteSound} />
					) : (
						<FaVolumeDown onClick={handleMuteSound} />
					)}
				</button>
			</div>
		</FooterStyledComponent>
	);
};

export default Footer;
