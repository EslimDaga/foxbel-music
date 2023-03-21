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
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.control-button-skip-back svg {
		color: #fff;
		width: 20px;
		height: 20px;
	}

	.control-button-playpause {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 118, 118, 1);
		border: none;
		cursor: pointer;
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}

	.control-button-playpause svg {
		color: #fff;
		width: 16px;
		height: 21px;
	}

	.control-button-skip-forward {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.control-button-skip-forward svg {
		color: #fff;
		width: 20px;
		height: 20px;
	}

	.volume-bar-widget {
		display: flex;
		align-items: center;
		gap: 40px;
		padding-right: 32px;
	}

	.volume-bar-widget input[type="range"] {
		background-color: #fff;
		appearance: none;
		border-radius: 5px;
		width: 100px;
		height: 6px;
	}

	.volume-bar-widget input[type="range"]::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #fff;
	}

	.volume-bar-widget button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.volume-bar-widget button svg {
		color: #fff;
		width: 18px;
		height: 42px;
	}
`;

export default FooterStyledComponent;
