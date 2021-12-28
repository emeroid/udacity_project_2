import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class Question extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, timestamp, id } = question;
		const { name, avatarURL } = author;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="dark" className="m-4 text-light">
						<Card.Header>
						<Image src={avatarURL} className="mr-2" roundedCircle fluid width="40" height="40" alt="user avatar"/>
							{name} asks:
						</Card.Header>
						<Card.Body className="text-center">
							<Card.Text>{optionOne.text.slice(0, 50)}?</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button variant="outline-light">View Question</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(Question);
