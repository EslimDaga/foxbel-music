import { FaEllipsisH, FaPlay, FaSearch, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getChart } from "../services/deezer";
import ContentStyledComponent from "./ContentStyledComponent";

const Content = () => {
	const [chart, setChart] = useState([]);

	useEffect(() => {
		getChart().then(response => {
			const { tracks } = response;
			setChart(tracks.data);
		});
	}, []);

	return (
		<ContentStyledComponent>
			<header>
				<div className="search-widget">
					<input type="text" placeholder="Buscar" />
					<FaSearch />
				</div>
				<div className="user-widget">
					<FaUser />
					<p>Francisco M.</p>
				</div>
			</header>
			<section className="content-area">
				<div className="hero-banner">
					<img
						src="https://e-cdns-images.dzcdn.net/images/artist/afd69289900a0c8ba42f301fe5c1fd60/250x250-000000-80-0-0.jpg"
						alt="album cover"
						width={250}
						height={250}
					/>
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
				<h1 className="title-results">Resultados</h1>
				<div className="grid-container">
					{chart.map(track => (
						<div className="item" key={track.id}>
							<div className="item-overlay">
								<img
									src={track.album.cover_medium}
									alt={track.title_short}
									width={160}
									height={160}
								/>

								<FaPlay className="item-play" />
								<FaEllipsisH className="item-actions" />
							</div>
							<div className="item-info">
								<h4>
									{track.title_short.length > 20
										? track.title_short.substring(0, 20) + "..."
										: track.title_short}
								</h4>
								<p>{track.album.title}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</ContentStyledComponent>
	);
};

export default Content;
