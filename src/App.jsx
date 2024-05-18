import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";

const H1 = styled.h1`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
`;

const StyledApp = styled.main`
	padding: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<H1>Hello world</H1>
				<Button onClick={() => alert("Check in")}>Check in</Button>
				<Button onClick={() => alert("Check out")}>Check out</Button>

				<Input type="number" placeholder="Number of guests" />
			</StyledApp>
		</>
	);
}

export default App;
