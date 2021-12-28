import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

class AnsweredQuestion extends Component {
	render() {
		const { question, author, authorizedUser } = this.props;
		const { firstOption, secondOption } = question;
		const { name, avatarURL } = author;
		const totalVote = firstOption.votes.length + secondOption.votes.length;
		const firstOptionPercent = Math.round((firstOption.votes.length / totalVote) * 100);
		const secondOptionPercent = Math.round((secondOption.votes.length / totalVote) * 100);

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-4">
						<Card.Header>
							<Image src={avatarURL} className="mr-2" roundedCircle fluid width="40" height="40" alt="user avatar"/>
							{name} asks:
						</Card.Header>
						<Card.Body className="d-flex justify-content-center">
							<ul>
								<li>
									{firstOption.text}
									{firstOption.votes.includes(authorizedUser) ? (
										<span className="text-success ml-2">
											Your choice
										</span>
									) : null}
								</li>
								<ProgressBar
									now={firstOptionPercent}
									label={`${firstOptionPercent}%`}
									variant="info"
								/>
								<Card.Text className="text-muted">
									chosen by {firstOption.votes.length} out of {totalVote}{' '}
									users
								</Card.Text>
								<li>
									{secondOption.text}
									{secondOption.votes.includes(authorizedUser) ? (
										<span className="text-success ml-2">
											Your choice
										</span>
									) : null}
								</li>
								<ProgressBar
									now={secondOptionPercent}
									label={`${secondOptionPercent}%`}
									variant="success"
								/>
								<Card.Text className="text-muted">
									chosen by {secondOption.votes.length} out of {totalVote}{' '}
									users
								</Card.Text>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users, authorizedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authorizedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
