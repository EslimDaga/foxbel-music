import { FaEllipsisH, FaSearch, FaUser } from "react-icons/fa";
import ContentStyledComponent from "./ContentStyledComponent";

const Content = () => {
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
				<h1 className="title">Resultados</h1>
			</section>
		</ContentStyledComponent>
	);
};

export default Content;
