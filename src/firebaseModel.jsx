import firebaseConfig from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import QuizModel from "./QuizModel";

import * as firebase from "firebase/app";

import { getDatabase, ref, set, get, child, onValue, remove } from "firebase/database";

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();


async function checkIfUsernameAlreadyExists(username)  {
  const users = await get(child(ref(db), "users"));
  if(Object.values(users.val()).some((user) => username === user.username))
        return true;
  else
    return false;
};

async function createUserInFirebase(email, username, password) {
  const usernameAlreadyExists = await checkIfUsernameAlreadyExists(username);
  if(usernameAlreadyExists)
  throw new Error("Username already exists");
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: username })
  return auth.currentUser;
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

        /* Remove users
        const users = await get(child(ref(db), "users"));
        Object.keys(users.val()).forEach(async key => {
          console.log(key);
          const userRef = ref(db, "users/" + key);
          remove(userRef).then(() => {
            console.log("removed");
          });
        })
        */

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
        //let allTimeScore;
        const date =
          new Date().getFullYear() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getDate();

        const completedSeasons =  await get(child(ref(db), "users/" + auth.currentUser.uid + "/completedSeasons"));

  set(
      ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics/" + completedSeasons.val()),
      {
        score: payload.score,
        date: date
      }
    );
    if(completedSeasons.val() === 0) {
      const seasonStatisticsRef =  ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics");
      onValue(seasonStatisticsRef, (firebaseData) => {
        const seasons = Object.values(firebaseData.val());
        if(seasons.length <= 5) {
          model.setLast5Seasons(seasons.reverse());
        }
        else {
          model.setLast5Seasons(seasons.slice(seasons.length - 5, seasons.length).reverse());
        }
      })
    }
    set(
      ref(db, "users/" + auth.currentUser.uid + "/completedSeasons"),
      completedSeasons.val() + 1
    );

    /*
        const snapshot = await get(
          ref(db, "users/" + auth.currentUser.uid + "/allTimeScore")
        );

        if (snapshot.exists()) allTimeScore = snapshot.val();

        allTimeScore += score;

        set(
          ref(db, "users/" + auth.currentUser.uid + "/allTimeScore"),
          allTimeScore
        );

        */
        set(
          ref(db, "highscore/" + auth.currentUser.uid + "/score"),
          payload.score
        );
        set(ref(db, "highscore/" + auth.currentUser.uid + "/date"), date);
      
      
    
      }
      else if (payload.hasOwnProperty("signIn")) {
      const seasonStatisticsRef =  ref(db, "users/" + auth.currentUser.uid + "/seasonStatistics");
      if(seasonStatisticsRef.exists()) {
        onValue(seasonStatisticsRef, (firebaseData) => {
          const seasons = Object.values(firebaseData.val());
          if(seasons.length <= 5) {
            model.setLast5Seasons(seasons.reverse());
          }
          else {
            model.setLast5Seasons(seasons.slice(seasons.length - 5, seasons.length).reverse());
          }
        })
      }
      }
    }
  });
}
function updateModelFromFirebase(model) {
  const highscoreRef = ref(db, "highscore");
  onValue(highscoreRef, (firebaseData) => {
    model.setHighScoreList(Object.values(firebaseData.val()));
  });
}


async function signInWithPasswordAndEmail(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  return auth.currentUser;
}

export {
  firebaseModelPromise,
  updateFirebaseFromModel,
  updateModelFromFirebase,
  signInWithPasswordAndEmail,
  createUserInFirebase,
};
