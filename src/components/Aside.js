import AsideStyledComponent from "./AsideStyledComponent";

const Aside = () => {
	return (
		<AsideStyledComponent>
			<div className="logo">
				<img
					src="images/foxbel-music.png"
					alt="logo-foxbel-music"
					width="250"
					height="59"
				/>
			</div>
			<ul>
				<li className="title">Mi librería</li>
				<li className="active">Recientes</li>
				<li>Artistas</li>
				<li>Album</li>
				<li>Canciones</li>
				<li>Estaciones</li>
			</ul>
			<ul>
				<li className="title">Playlist</li>
				<li>Metal</li>
				<li>Para bailar</li>
				<li>Rock 90s</li>
				<li>Baladas</li>
			</ul>
		</AsideStyledComponent>
	);
};

export default Aside;
