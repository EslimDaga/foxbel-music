import FooterStyledComponent from "./FooterStyledComponent";

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
				<button className="control-button-skip-back"></button>
				<button className="control-button-playpause"></button>
				<button className="control-button-skip-forward"></button>
			</div>
			<div className="volume-bar">
				<button
					type="range"
					style={{
						width: "100px",
						height: "20px",
					}}
				></button>
				<button
					style={{
						width: "18px",
						height: "42px",
					}}
				></button>
			</div>
		</FooterStyledComponent>
	);
};

export default Footer;
