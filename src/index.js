import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import ViewScreenshot from './components/ViewScreenshot';

const Wrapper = styled.div`
	background: #282c35;
	min-height: 100vh;
	color: #fff;
`;
class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<Router>
					<React.Fragment>
						<Route exact path="/" component={NotFound} />
						<Route path="/ss/:id" component={ViewScreenshot} />
					</React.Fragment>
				</Router>
			</Wrapper>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
