import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { handleAddQuestion } from '../actions/questions';

class CreateQuestion extends Component {
	state = {
		firstOption: '',
		secondOption: '',
		goBack: false
	};

	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { firstOption, secondOption } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				firstOption: '',
				secondOption: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(firstOption, secondOption))
		);
	};

	render() {
		const { firstOption, secondOption, toHome } = this.state;

		if (toHome === true) return <Redirect to="/" />;

		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2>
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<Card bg="dark" className="m-3 text-center text-light">
							<Card.Body>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId="firstOption">
										<Form.Label>First Choice</Form.Label>
										<Form.Control
											type="text"
											name="firstOption"
											value={firstOption}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									
									<Form.Group controlId="secondOption">
										<Form.Label>Second Choice</Form.Label>
										<Form.Control
											type="text"
											name="secondOption"
											value={secondOption}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									<Button
										type="submit"
										variant="outline-light"
										disabled={firstOption === '' || secondOption === ''}
									>
										Submit
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default connect()(CreateQuestion);
