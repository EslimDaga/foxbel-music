import styled from "styled-components";

const FooterStyledComponent = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100px;
	background-color: #eb5757;

	.now-playing-widget {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.now-playing-widget__info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.now-playing-widget__info p {
		font-size: 14px;
		font-weight: 700;
		color: #fff;
	}

	.now-playing-widget__info span {
		font-size: 12px;
		font-weight: 400;
		color: #fff;
	}

	.player-controls {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.control-button-skip-back {
		width: 36px;
		height: 36px;
	}

	.control-button-playpause {
		width: 60px;
		height: 60px;
	}

	.control-button-skip-forward {
		width: 36px;
		height: 36px;
	}

	.volume-bar {
		display: flex;
		align-items: center;
		gap: 40px;
		padding-right: 32px;
	}
`;

export default FooterStyledComponent;
