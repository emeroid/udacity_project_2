export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER';
export const CLEAR_AUTHENTICATED_USER = 'CLEAR_AUTHENTICATED_USER';

export function setAuthorizedUser(id) {
	return {
		type: SET_AUTHENTICATED_USER,
		id
	};
}

export function clearAuthorizedUser(id) {
	return {
		type: CLEAR_AUTHENTICATED_USER
	};
}
