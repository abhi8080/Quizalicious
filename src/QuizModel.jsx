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

    this.currentGame = 0;           //Current game in season
    this.gameScores = [0,0,0,0,0];  //current game scores
    this.score = 0;                 //SeasonScore
    this.seasonDone = false;        //Season done stats

    this.profileMenuOpen = false;

    this.quickGameMode = false;
    this.quickGameCategory = "";
    this.quickGameDifficulty = "";
  }

  getGameScore() {
    return this.gameScores[this.currentGame];
  }
  
  setScore(score) {
    this.score = score;
    this.notifyObservers({
      score: this.score,
    });
  }

  getSeasonScore() {
    return this.gameScores.reduce((acc,curr)=>acc+curr,0);
  }

  setGameScore(score) {
    this.gameScores[this.currentGame]=score;

    if( this.currentGame === 4 )
      this.setScore(this.getSeasonScore());
  }

  setSeasonDone(status) {
    this.seasonDone = status;
  }

  resetSeason() {
    this.setCurrentGame(0)
    this.currentQuestion = 0;
    this.gameScores = [0,0,0,0,0];
    this.score = 0;
  }

  setCurrentGame(game) {
    this.currentGame = game;
    this.currentQuestion = 0;

    this.notifyObservers({
      currentGame: this.currentGame,
    });
  }

  nextGame() {
    this.setCurrentGame(this.currentGame+1);
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
    if( this.profileMenuOpen ) {
      this.profileMenuOpen = false;
      this.notifyObservers({
        profileMenuOpen: this.profileMenuOpen,
      });
    }
  }

  setQuickGame(category, difficulty) {
    this.quickGameMode = true;
    this.quickGameCategory = category;
    this.quickGameDifficulty = difficulty;
  }

  setProfileMenuOpen(val) {
    this.profileMenuOpen = val;
  }
  nextGameInSeason() {
    this.currentGame += 1;
    this.notifyObservers({
      currentGame: this.currentGame,
    });
  }
  setCurrentUser(user) {
    this.currentUser = user;
  }
  async createUser(email, username, password) {
    await createUserInFirebase(email, username, password);
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
    this.notifyObservers();
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
