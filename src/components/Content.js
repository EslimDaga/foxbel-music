import {
	FaEllipsisH,
	FaPause,
	FaPlay,
	FaSearch,
	FaTimes,
	FaUser,
} from "react-icons/fa";
import ContentStyledComponent from "./ContentStyledComponent";

const Content = ({
	traks,
	search,
	handleSearch,
	handlePlay,
	handleCurrentTrack,
	handleResetSearch,
	isPlaying,
	currentTrack,
}) => {
	return (
		<ContentStyledComponent>
			<header>
				<div className="search-widget">
					<input
						type="text"
						placeholder="Buscar"
						onChange={handleSearch}
						value={search}
					/>
					{search.length > 0 ? (
						<FaTimes onClick={handleResetSearch} className="reset-search" />
					) : (
						<FaSearch />
					)}
				</div>
				<div className="user-widget">
					<FaUser />
					<p>Francisco M.</p>
				</div>
			</header>
			<section className="content-area">
				<div className="hero-banner">
					<div className="overlay">
						<img
							src="images/picture.png"
							alt="album cover"
							width={250}
							height={250}
						/>
						<FaPlay className="item-play" />
					</div>
					<div className="content">
						<div className="title">
							<h1>Adele 21</h1>
							<div className="subtitle">
								<p>Lo mejor de Adele</p>
								<span>321, 123 seguidores</span>
							</div>
						</div>
						<p className="description">
							Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
							mayo de 1988), conocida simplemente como Adele, es una cantante,
							compositora y multinstrumentista británica.8
						</p>
						<div className="actions">
							<button className="play">Reproducir</button>
							<button className="follow">Seguir</button>
							<FaEllipsisH />
						</div>
					</div>
				</div>
				<h1 className="title-results">
					Resultados {search.length > 0 && `para "${search}"`}
				</h1>

				{traks.total > 0 && (
					<div className="grid-container">
						{traks.data.map((track, index) => (
							<div className="item" key={track.id}>
								<div className="item-overlay">
									<img
										src={track.album.cover_medium}
										alt={track.title_short}
										width={160}
										height={160}
									/>
									{isPlaying && currentTrack.id === track.id ? (
										<FaPause
											className="item-play"
											onClick={() => {
												handlePlay();
											}}
										/>
									) : (
										<FaPlay
											className="item-play"
											onClick={() => {
												handlePlay();
												handleCurrentTrack(track);
											}}
										/>
									)}
									<FaEllipsisH className="item-actions" />
								</div>
								<div className="item-info">
									<h4>
										{track.title_short.length > 18
											? track.title_short.substring(0, 18) + "..."
											: track.title_short}
									</h4>
									<p>
										{track.album.title.length > 20
											? track.album.title.substring(0, 20) + "..."
											: track.album.title}
									</p>
								</div>
							</div>
						))}
					</div>
				)}
				{traks.total === 0 && (
					<div className="no-results">
						<h1>No se encontraron resultados</h1>
					</div>
				)}
			</section>
		</ContentStyledComponent>
	);
};

export default Content;
