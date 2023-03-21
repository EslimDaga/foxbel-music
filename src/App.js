import styled from "styled-components";

const Aside = styled.aside`
	background-color: #662323;
	width: 330px;
	overflow: auto;
`;

const MainContainer = styled.div`
	display: flex;
	height: 100vh;
`;

const Content = styled.div`
	width: calc(100% - 330px);
	overflow: auto;
`;

const Footer = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100px;
	background-color: #eb5757;
`;

const App = () => {
	return (
		<>
			<MainContainer>
				<Aside></Aside>
				<Content>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Content>
			</MainContainer>
			<Footer />
		</>
	);
};

export default App;
