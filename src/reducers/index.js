import { combineReducers } from 'redux';

import postsReducers from './posts_reducer';
import authReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	posts: postsReducers,
	form: formReducer,
	auth: authReducer
});
