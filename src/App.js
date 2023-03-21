import styled from "styled-components";
import Footer from "./components/Footer";

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
