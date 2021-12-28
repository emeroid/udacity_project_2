import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { clearAuthorizedUser } from '../actions/authedUser';
import Image from 'react-bootstrap/Image';

function Header(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(clearAuthorizedUser());
	};

	return (
		<Fragment>
			<Navbar expand="lg" bg="dark" variant="dark" className="my-3 border text-light">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact color="light">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav className="align-items-start">
						<Navbar.Text>{user.name}</Navbar.Text>
						<Image src={user.avatarURL} className="ml-3 mr-4" roundedCircle fluid width="40" height="40" alt="user avatar"/>
						<Button
							variant="outline-light"
							onClick={handleLogout}
							className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(Header);
