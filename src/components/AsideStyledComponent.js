import styled from "styled-components";

const AsideStyledComponent = styled.aside`
	background-color: #662323;
	width: 330px;
	overflow: auto;

	.logo {
		margin-top: 50px;
		margin-bottom: 30px;
		margin-left: 40px;
		margin-right: 40px;
	}

	ul {
		margin-left: 40px;
		margin-right: 40px;
		margin-bottom: 30px;
		list-style: none;
	}

	li.title {
		color: #fff;
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 4px;
	}

	li.active {
		color: #e86060;
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	li.active::before {
		content: "";
		position: absolute;
		left: 0px;
		width: 5px;
		height: 20px;
		background-color: #e86060;
	}

	li {
		color: #fff;
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 8px;
	}
`;

export default AsideStyledComponent;
