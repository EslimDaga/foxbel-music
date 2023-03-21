import AsideStyledComponent from "./AsideStyledComponent";

const Aside = () => {
	return (
		<AsideStyledComponent>
			<div
				style={{
					marginTop: "50px",
					marginBottom: "30px",
					marginLeft: "40px",
					marginRight: "40px",
				}}
			>
				<img src="" alt="" style={{ width: "250px", height: "59px" }} />
			</div>
			<ul
				style={{
					marginLeft: "40px",
					marginRight: "40px",
					marginBottom: "30px",
					listStyle: "none",
				}}
			>
				<li
					style={{
						color: "#fff",
						fontSize: "22px",
						fontWeight: "700",
						marginBottom: "4px",
					}}
				>
					Mi librería
				</li>
				<li
					style={{
						color: "#E86060",
						fontSize: "16px",
						fontWeight: "700",
						marginBottom: "8px",
					}}
				>
					Recientes
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Artistas
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Album
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Canciones
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Estaciones
				</li>
			</ul>
			<ul
				style={{
					marginLeft: "40px",
					marginRight: "40px",
					listStyle: "none",
				}}
			>
				<li
					style={{
						color: "#fff",
						fontSize: "22px",
						fontWeight: "700",
						marginBottom: "4px",
					}}
				>
					Playlist
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Metal
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Para bailar
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Rock 90s
				</li>
				<li
					style={{
						color: "#fff",
						fontSize: "16px",
						fontWeight: "400",
						marginBottom: "8px",
					}}
				>
					Baladas
				</li>
			</ul>
		</AsideStyledComponent>
	);
};

export default Aside;
