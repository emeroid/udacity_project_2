import { GET_QUESTIONS, ADD_QUESTIONS, ADD_ANSWERS } from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions
			};

		case ADD_QUESTIONS:
			return {
				...state,
				[action.question.id]: action.question
			};

		case ADD_ANSWERS:
			const { qid, answer, authedUser } = action.answerInfo;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};

		default:
			return state;
	}
}
