import FooterStyledComponent from "./FooterStyledComponent";
import {
	FaStepBackward,
	FaPlay,
	FaStepForward,
	FaVolumeUp,
} from "react-icons/fa";

const Footer = () => {
	return (
		<FooterStyledComponent>
			<div className="now-playing-widget">
				<img
					src="images/picture.png"
					alt="Album cover"
					width={100}
					height={100}
				/>
				<div className="now-playing-widget__info">
					<p>Canción</p>
					<span>Artista - Album</span>
				</div>
			</div>
			<div className="player-controls">
				<button className="control-button-skip-back">
					<FaStepBackward />
				</button>
				<button className="control-button-playpause">
					<FaPlay />
				</button>
				<button className="control-button-skip-forward">
					<FaStepForward />
				</button>
			</div>
			<div className="volume-bar-widget">
				<input type="range" min={1} max={800} step={1}></input>
				<button>
					<FaVolumeUp />
				</button>
			</div>
		</FooterStyledComponent>
	);
};

export default Footer;
