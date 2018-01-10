import * as firebase from 'firebase';

const config = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId
};

const dev_config = {
	apiKey: 'AIzaSyBiRdEndmhnbkG3BXc1KhXAi1aUpJhSMzw',
	authDomain: 'react-redux-firebase-1a6fd.firebaseapp.com',
	databaseURL: 'https://react-redux-firebase-1a6fd.firebaseio.com',
	projectId: ' react-redux-firebase-1a6fd',
	storageBucket: ' react-redux-firebase-1a6fd.appspot.com',
	messagingSenderId: ' 787039328305'
};

// npm run build will switch to production keys....
// for our staging hosted site we have to over ride the keys
// local + prod will use .env keys...
switch (window.location.hostname) {
	case 'react-redux-firebase-1a6fd.firebaseapp.com':
		firebase.initializeApp(dev_config);
		break;
	default:
		firebase.initializeApp(config);
		break;
}

export default firebase;
