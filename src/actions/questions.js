import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const ADD_ANSWERS = 'ADD_ANSWERS';

export function getQuestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTIONS,
		question
	};
}

function addAnswer({ id, answer, authorizedUser }) {
	return {
		type: ADD_ANSWERS,
		answerInfo: {               
			id,
			answer,
			authorizedUser
		}
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authorizedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			firstOption: optionOne,
			secondOption: optionTwo,
			author: authorizedUser
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddAnswer(id, answer) {
	return (dispatch, getState) => {
		const { authorizedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			id,
			answer,
			authorizedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						id,
						answer,
						authorizedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}
