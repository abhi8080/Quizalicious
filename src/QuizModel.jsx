import {
  createUserInFirebase,
  signInWithPasswordAndEmail,
} from "./firebaseModel.jsx";

class QuizModel {
  constructor(highScoreList) {
    this.observers = [];
    this.currentUser = null;
    this.highScoreList = highScoreList;
    this.achievementsInGame = [{ 1: "." }, { 2: "." }];
    this.currentUserAchievements;
  }
  setCurrentUser(user) {
    this.currentUser = user;
  }
  createUser(email, username, password) {
    createUserInFirebase(email, password);
    this.notifyObservers({
      email: email,
      username: username,
      password: password,
    });
  }
  signIn(email, password) {
    signInWithPasswordAndEmail(email, password);
  }
  setCurrentUserAchievements(achievements) {
    this.currentUserAchievements = achievements;
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    this.observers = this.observers.filter((observer) => observer !== callback);
  }

  saveScore(score) {
    this.notifyObservers({ score: score });
  }

  setHighScoreList(highScoreList) {
    this.highScoreList = highScoreList;
  }

  notifyObservers(payload) {
    try {
      this.observers.forEach((obs) => obs(payload));
    } catch (err) {
      console.error(err);
    }
  }
}
export default QuizModel;
