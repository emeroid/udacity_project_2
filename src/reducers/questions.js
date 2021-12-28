import { GET_QUESTIONS, ADD_QUESTIONS, ADD_ANSWERS} from '../actions/questions';

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
			const { id, answer, authedUser } = action.answerInfo;

			return {
				...state,
			[id]: {
					...state[id],
					[answer]: {
						...state[id][answer],
						votes: state[id][answer].votes.concat([authedUser])
					}
				}
			};

		default:
			return state;
	}
}
