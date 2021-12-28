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

function addAnswer({ qid, answer, authedUser }) {
	return {
		type: ADD_ANSWERS,
		answerInfo: {
			qid,
			answer,
			authedUser
		}
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}
