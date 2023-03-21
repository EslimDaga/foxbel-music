import styled from "styled-components";

const ContentStyledComponent = styled.div`
	width: calc(100% - 330px);
	overflow: auto;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30px;
		padding-right: 40px;
		padding-bottom: 40px;
		padding-left: 40px;
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
		margin-left: 40px;
		margin-right: 40px;
	}

	.hero-banner {
		display: flex;
		align-items: center;
	}

	.hero-banner .content {
		background-image: url(images/adele-wallpaper.png);
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 250px;
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
`;

export default ContentStyledComponent;
