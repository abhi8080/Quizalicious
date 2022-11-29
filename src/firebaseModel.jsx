import firebaseConfig from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import QuizModel from "./QuizModel";

import * as firebase from "firebase/app";

import { getDatabase, ref, set, get, child, onValue } from "firebase/database";

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();

async function createUserInFirebase(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

async function firebaseModelPromise() {
  const highscoreData = await get(child(ref(db), "highscore"));
  if (highscoreData.exists()) {
    const highScoreListArray = Object.values(highscoreData.val());
    return new QuizModel(highScoreListArray);
  }
  return new QuizModel();
}

function updateFirebaseFromModel(model) {
  model.addObserver(async function (payload) {
    if (payload) {
      if (payload.hasOwnProperty("email")) {
        set(ref(db, "users/" + auth.currentUser.uid), {
          email: payload.email,
          password: payload.password,
          username: payload.username,
          allTimeScore: 0,
          completedSeasons: 0,
        });
        set(ref(db, "highscore/" + auth.currentUser.uid), {
          username: payload.username,
          score: 0,
          date:
            new Date().getFullYear() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getDate(),
        });
      } else if (payload.hasOwnProperty("score")) {
        let allTimeScore;
        const date =
          new Date().getFullYear() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getDate();

        const snapshot = await get(
          ref(db, "users/" + auth.currentUser.uid + "/allTimeScore")
        );

        if (snapshot.exists()) allTimeScore = snapshot.val();

        allTimeScore += score;

        set(
          ref(db, "users/" + auth.currentUser.uid + "/allTimeScore"),
          allTimeScore
        );

        set(
          ref(db, "highscore/" + auth.currentUser.uid + "/score"),
          allTimeScore
        );
        set(ref(db, "highscore/" + auth.currentUser.uid + "/date"), date);
      }
    }
  });
}
function updateModelFromFirebase(model) {
  const highscoreRef = ref(db, "highscore");
  onValue(highscoreRef, (firebaseData) => {
    model.setHighScoreList(firebaseData.val());
  });
}

async function signInWithPasswordAndEmail(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export {
  firebaseModelPromise,
  updateFirebaseFromModel,
  updateModelFromFirebase,
  signInWithPasswordAndEmail,
  createUserInFirebase,
};
