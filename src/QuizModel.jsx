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
    this.currentSeasonGames = [
      { name: "Easy game 1", difficulty: "easy" },
      { name: "Easy game 2", difficulty: "easy" },
      { name: "Medium game 3", difficulty: "medium" },
      { name: "Medium game 4", difficulty: "medium" },
      { name: "Hard game 5", difficulty: "hard" },
    ]
    this.currentGame = 0;
    this.currentQuestion = 0;
    this.rightAnswersInSeason = [0, 0, 0, 0, 0];
    this.score = 0;
    this.profileMenuOpen = false;
  }

  setScore(score) {
    this.score = score;
    this.notifyObservers({
      score: this.score,
    });
  }

  resetSeason() {
    this.currentGame = 0;
    this.currentQuestion = 0;
    this.rightAnswersInSeason = [0,0,0,0,0];
  }

  setRightAnswersInSeason( rightAnswers, game ) {
    this.rightAnswersInSeason[game] = rightAnswers;
    this.notifyObservers({
      rightAnswersInSeason: this.rightAnswersInSeason,
    });
  }

  resetCorrectAnwers() {
    this.rightAnswersInSeason = [0, 0, 0, 0, 0];
  }


  closeProfileMenu() {
    this.profileMenuOpen = false;
    this.notifyObservers({
      profileMenuOpen: this.profileMenuOpen,
    });
  }
  nextGameInSeason() {
    this.currentGame += 1;
    this.notifyObservers({
      currentGame: this.currentGame,
    });
  }
  setCurrentGame(num) {
    this.currentGame = num;
    this.notifyObservers({
      currentGame: this.currentGame,
    });
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
    this.setCurrentUser(email);
  }
  async signIn(email, password) {
    await signInWithPasswordAndEmail(email, password);
    this.setCurrentUser(email);
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
