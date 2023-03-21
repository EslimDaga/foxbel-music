import FooterStyledComponent from "./FooterStyledComponent";

const Footer = () => {
	return (
		<FooterStyledComponent>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "20px",
				}}
			>
				<img
					style={{
						border: "1px solid black",
						width: "100px",
						height: "100px",
					}}
					src="image.jpg"
					alt="Album cover"
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<p
						style={{
							fontSize: "14px",
							fontWeight: "700",
							color: "white",
						}}
					>
						Canción
					</p>
					<span
						style={{
							fontSize: "12px",
							fontWeight: "400",
							color: "white",
						}}
					>
						Artista - Album
					</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "20px",
				}}
			>
				<button
					style={{
						width: "36px",
						height: "36px",
					}}
				></button>
				<button
					style={{
						width: "60px",
						height: "60px",
					}}
				></button>
				<button
					style={{
						width: "36px",
						height: "36px",
					}}
				></button>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "40px",
					paddingRight: "32px",
				}}
			>
				<button
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
