import styled from "styled-components";

const ContentStyledComponent = styled.div`
	width: calc(100% - 330px);
	height: calc(100% - 100px);
	overflow: auto;

	@media (max-width: 768px) {
		width: 100%;

		header {
			gap: 20px;
			padding: 20px 20px;
		}

		.user-widget p {
			display: none;
		}

		section.content-area {
			padding: 20px 20px;
		}

		.hero-banner img {
			display: none;
		}

		.hero-banner .content {
			height: 100%;
			padding-bottom: 20px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1200px) {
		width: calc(100% - 330px);

		header {
			gap: 20px;
			padding: 20px 20px;
		}

		.user-widget p {
			display: none;
		}

		section.content-area {
			padding: 20px 20px;
		}

		.hero-banner img {
			display: none;
		}

		.hero-banner .content {
			height: 100%;
			padding-bottom: 20px;
		}
	}

	@media screen and (min-width: 1200px) {
		header {
			gap: 20px;
			padding: 30px 40px;
		}

		section.content-area {
			padding: 30px 40px;
		}

		.hero-banner .content {
			height: 250px;
		}
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.search-widget {
		display: flex;
		align-items: center;
		border: 1px solid #828282;
		border-radius: 100px;
		width: 524px;
		height: 36px;
		outline: none;
		padding-left: 16px;
		padding-right: 16px;
	}

	.search-widget input {
		border: none;
		flex-grow: 1;
		outline: none;
		font-family: "Quicksand";
		font-size: 18px;
		color: #bdbdbd;
		font-weight: 400;
		background-color: transparent;
	}

	.search-widget .reset-search {
		cursor: pointer;
	}

	.search-widget svg {
		color: #bdbdbd;
	}

	.user-widget {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.user-widget svg {
		color: #e86060;
	}

	.user-widget p {
		color: #4f4f4f;
	}

	section.content-area {
		display: block;
	}

	.hero-banner {
		display: flex;
		align-items: center;
	}

	.hero-banner .overlay {
		width: 250px;
		height: 250px;
		position: relative;
	}

	.hero-banner .overlay .item-play {
		cursor: pointer;
		position: absolute;
		margin: auto;
		color: white;
		inset: 0;
		width: 63px;
		height: 72px;
	}

	.hero-banner .content {
		background-image: url(images/adele-wallpaper.png);
		background-size: cover;
		background-position: center;
		width: 100%;
		padding-left: 30px;
	}

	.hero-banner .content .title {
		padding-top: 40px;
	}

	.hero-banner .content .title h1 {
		font-size: 22px;
		font-weight: 700;
		color: white;
	}

	.hero-banner .content .subtitle {
		display: flex;
		align-items: flex-end;
		gap: 16px;
	}

	.hero-banner .content .subtitle p {
		font-size: 14px;
		color: white;
	}

	.hero-banner .content .subtitle span {
		font-size: 10px;
		color: #662323;
	}

	.hero-banner .content .description {
		padding-top: 20px;
		color: white;
		font-size: 12px;
		line-height: 20.19px;
	}

	.hero-banner .content .actions {
		display: flex;
		align-items: center;
		padding-top: 58px;
		gap: 20px;
	}

	.hero-banner .content .actions .play {
		background-color: #e86060;
		border-radius: 100px;
		width: 117px;
		height: 31px;
		color: white;
		border: none;
		font-size: 14px;
		cursor: pointer;
		font-family: "Quicksand";
	}

	.hero-banner .content .actions .follow {
		background-color: transparent;
		width: 117px;
		height: 31px;
		border-radius: 100px;
		border: 1px solid #e86060;
		color: #e86060;
		font-size: 14px;
		cursor: pointer;
		font-family: "Quicksand";
	}

	.hero-banner .content .actions svg {
		color: white;
		cursor: pointer;
	}

	section.content-area .title-results {
		padding-top: 40px;
		padding-bottom: 20px;
		font-size: 22px;
		line-height: 28px;
		color: #e86060;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 23px;
		justify-items: center;
		margin: 0 auto;
	}

	.item {
		width: 160px;
		background-color: transparent;
	}

	.item-overlay {
		position: relative;
	}

	.item-overlay .item-play {
		cursor: pointer;
		position: absolute;
		margin: auto;
		inset: 0;
		color: white;
		width: 32px;
		height: 36px;
	}

	.item-overlay .item-actions {
		display: inline-block;
		position: absolute;
		right: 8px;
		top: 8px;
		transform: rotate(90deg);
		color: white;
		width: 4;
		height: 18px;
	}

	.item-info {
		padding-top: 8px;
	}

	.item-info h4 {
		font-size: 14px;
		font-weight: 700;
		color: #555555;
	}

	.item-info p {
		font-size: 12px;
		line-height: 15px;
	}
`;

export default ContentStyledComponent;
