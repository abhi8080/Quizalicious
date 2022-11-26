import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, ref, set, get } from "firebase/database";

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();
export async function createUser(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    set(ref(db, "users/" + auth.currentUser.uid), {
      email: email,
      password: password,
      allTimeScore: 0,
      completedSeasons: 0,
    });
    set(ref(db, "highscore/" + auth.currentUser.uid), {
      username: "username",
      score: 0,
      date:
        new Date().getFullYear() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getDate(),
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
}
