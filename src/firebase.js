import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyB0YcTSbPboUrEh9KrAW3VJehkK_xC0t4k',
	authDomain: 'first-flight-with-friend-c0baa.firebaseapp.com',
	databaseURL: 'https://first-flight-with-friend-c0baa.firebaseio.com',
	projectId: 'first-flight-with-friend-c0baa',
	storageBucket: 'first-flight-with-friend-c0baa.appspot.com',
	messagingSenderId: '261060051739'
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
