import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Home from './Home';
import NewQuestion from './CreateQuestion';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './PageNotFound';

class _Route extends Component {
	render() {
		return (
			<Router>
				<Container>
					<Header />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route path="*" component={PageNotFound} />
						</Switch>
					</main>
				</Container>
			</Router>
		);
	}
}

export default _Route;
