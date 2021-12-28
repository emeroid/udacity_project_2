import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Login from './components/Login';
import Routes from './components/Route';
import { handleInitialData } from './actions/init';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser, loadingBar } = this.props;

		if (loadingBar.default === undefined || loadingBar.default === 1) {
			//loading
			return (
				<div className="d-flex justify-content-center">
					<Spinner
						animation="border"
						role="status"
						variant="secondary"
						className="my-5"
					>
						<span className="sr-only">Loading...</span>
					</Spinner>
				</div>
			);
		} else {
			return <Fragment>{!authedUser ? <Login /> : <Routes />}</Fragment>;
		}
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
