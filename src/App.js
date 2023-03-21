import styled from "styled-components";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";

const MainContainer = styled.div`
	display: flex;
	height: 100vh;
`;

const App = () => {
	return (
		<>
			<MainContainer>
				<Aside />
				<Content />
			</MainContainer>
			<Footer />
		</>
	);
};

export default App;
