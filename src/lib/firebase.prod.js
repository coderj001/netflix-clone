import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import firebaseConfig from "../firebase-config";

// we need to seed dbs

// need config
const config = firebaseConfig;

const firebase = Firebase.initializeApp(config);

// only first time
// import { seedDatabase } from "../seed";
// seedDatabase(firebase);

export { firebase };
