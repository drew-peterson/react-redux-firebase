import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case AUTH_USER:
			const { email } = action.payload;
			return { email };

		case UNAUTH_USER:
			console.log('UNAUTH_USER', action.payload);
			return action.payload;
		default:
			return state;
	}
}
