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
    this.currentSeasonGames = [ {name: "Easy game 1",   difficulty: "easy"  },
                                {name: "Easy game 2",   difficulty: "easy"  },
                                {name: "Medium game 3", difficulty: "medium"},
                                {name: "Medium game 4", difficulty: "medium"},
                                {name: "Hard game 5",   difficulty: "hard"  } ];
    this.playedGamesInCurrentSeason = 0;
    this.currentGameQuestions = [
                                  {
                                    category:"History",
                                    question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium felis quam, quis tincidunt arcu iaculis et. Quisque egestas nibh risus, ut mattis tortor aliquam quis. Quisque eu suscipit sem?",
                                    options:["ullamcorper","Mauris","congue","aptent"],
                                    rightAnswer:1
                                  },
                                  {
                                    category:"History",
                                    question:"Mauris tristique, leo at consequat tincidunt, leo nisl laoreet sapien, nec sodales sem dolor at nulla?",
                                    options:["litora ","Vivamus ","ante ","massa"],
                                    rightAnswer:2},
                                  {
                                    category:"History",
                                    question:" Integer id tempor diam. Mauris eu varius felis?",
                                    options:["consectetur","mi","turpis","volutpat"],
                                    rightAnswer:3},
                                  {
                                    category:"History",
                                    question:"Maecenas tincidunt magna et velit mollis, ut congue sapien accumsan?",
                                    options:["lacinia","malesuada","at ","Nulla"],
                                    rightAnswer:4},
                                  {
                                    category:"History",
                                    question:"Nam tempus orci nec diam faucibus, quis iaculis velit ultrices?",
                                    options:["per","amet","quis","Morbi"],
                                    rightAnswer:1
                                  },
                                  ]
    this.rightAnswers=[1,2,3,4,1]
    this.answers = ["","","","",""]
  }
  nextGameInSeason() {
    playedGamesInCurrentSeason += 1;
    this.notifyObservers({playedGamesInCurrentSeason: playedGamesInCurrentSeason})
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
    this.setCurrentUser(email)
  }
  signIn(email, password) {
    signInWithPasswordAndEmail(email, password);
    this.setCurrentUser(email)
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
