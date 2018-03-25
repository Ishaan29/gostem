import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBmN2hRIdcTWoTY59vChnWONnbJAMTeS2k",
    authDomain: "gostem-7bd1d.firebaseapp.com",
    databaseURL: "https://gostem-7bd1d.firebaseio.com",
    projectId: "gostem-7bd1d",
    storageBucket: "gostem-7bd1d.appspot.com",
    messagingSenderId: "818566469229"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};