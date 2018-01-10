import { FETCH_POSTS, FETCH_PUBLIC_POSTS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				userPosts: action.payload
			};
		case FETCH_PUBLIC_POSTS:
			return {
				...state,
				publicPosts: action.payload
			};
		default:
			return state;
	}
}
