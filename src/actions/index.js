import firebase from '../firebase.js';
import {
	FETCH_POSTS,
	AUTH_USER,
	UNAUTH_USER,
	FETCH_PUBLIC_POSTS
} from './types';

const PublicPosts = firebase.database().ref('/posts');

export const fetchPosts = () => async dispatch => {
	const uid = firebase.auth().currentUser.uid;

	const UserPosts = firebase.database().ref(`users/${uid}/posts`);
	UserPosts.on('value', snapshot => {
		dispatch({
			type: FETCH_POSTS,
			payload: snapshot.val()
		});
	});
};

export const createPost = value => dispatch => {
	const { uid, email } = firebase.auth().currentUser;
	const newPostKey = firebase
		.database()
		.ref()
		.child('posts')
		.push().key;

	const newPost = {
		body: value,
		uid: uid,
		email: email,
		createdAt: firebase.database.ServerValue.TIMESTAMP
	};
	updatePosts(newPostKey, newPost); // create / update by first creating a key then updating w/ that key!
};

export const deletePost = key => dispatch => {
	// Posts.child(key).remove(); // This will prompt a new value listen so automatically fetch post....
	updatePosts(key, null); // can remove nodes by updating to null....
};

export const fetchPublicPosts = () => dispatch => {
	PublicPosts.on('value', snapshot => {
		dispatch({
			type: FETCH_PUBLIC_POSTS,
			payload: snapshot.val()
		});
	});
};

// AUTH =====================

export const authSignup = ({ email, password }, history) => async dispatch => {
	try {
		const user = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		await firebase
			.database()
			.ref(`users/${user.uid}`)
			.set({
				email: user.email
			});

		dispatch({
			type: AUTH_USER,
			payload: user
		});
		history.push('/posts');
	} catch (error) {
		console.log('errorMessage', error.errorMessage);
	}
};

export const authLogin = ({ email, password }, history) => async dispatch => {
	try {
		const user = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		dispatch({
			type: AUTH_USER,
			payload: user
		});
		history.push('/posts');
	} catch (error) {
		console.log('errorMessage', error.errorMessage);
	}
};

export const authLogout = () => async dispatch => {
	await firebase.auth().signOut();

	dispatch({
		type: UNAUTH_USER,
		payload: null
	});
};

export const checkAuth = history => dispatch => {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			dispatch({
				type: AUTH_USER,
				payload: user
			});
		} else {
			history.push('/');
		}
	});
};

function updatePosts(key, values) {
	const { uid } = firebase.auth().currentUser;
	const updates = {
		[`/posts/${key}`]: values,
		[`/users/${uid}/posts/${key}`]: values
	};
	firebase
		.database()
		.ref()
		.update(updates);
}
