import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgjgjINL5HK1rK-7CMpKbpkOYGGSloqWU",
    authDomain: "netflix-b20c4.firebaseapp.com",
    projectId: "netflix-b20c4",
    storageBucket: "netflix-b20c4.appspot.com",
    messagingSenderId: "205732851158",
    appId: "1:205732851158:web:0c63410460c8ae780cc877"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export {auth} 