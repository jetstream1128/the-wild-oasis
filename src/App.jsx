import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Hading";
import Row from "./ui/Row";

const StyledApp = styled.main`
	padding: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Row type="vertical">
					<Row type="horizontal">
						<Heading as="h1">The wild Oasis</Heading>

						<div>
							<Heading as="h2">Check in and out</Heading>
							<Button onClick={() => alert("Check in")}>Check in</Button>
							<Button
								variation="secondary"
								size="small"
								onClick={() => alert("Check out")}
							>
								Check out
							</Button>
						</div>
					</Row>
					<Row type="vertical">
						<Heading as="h3">Form</Heading>
						<form>
							<Input type="number" placeholder="Number of guests" />
							<Input type="number" placeholder="Number of guests" />
						</form>
					</Row>
				</Row>
			</StyledApp>
		</>
	);
}

export default App;
