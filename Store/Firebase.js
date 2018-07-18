import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD9_NGWB0yS6QkduCKrV8zIr5grY_27uzQ',
  authDomain: 'flickr-eb891.firebaseapp.com',
  databaseURL: 'https://flickr-eb891.firebaseio.com',
  projectId: 'flickr-eb891',
  storageBucket: '',
  messagingSenderId: '1007897677204'
};

firebase.initializeApp(config);

export const authenticate = firebase.auth();
export const database = firebase.database();
