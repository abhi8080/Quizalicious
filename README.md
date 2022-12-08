
## Project Quizalicious

A quiz based game with leaderboard!

Try to get on the leaderboard by completing a season!

A season consists of 2 easy games, 2 medium difficulty games and one hard difficulty game.

## How to setup

1. install node
2. Clone the repository to any directory
3. After cloning execute
```
npm install
```
4. To start your development server run
```
npm run dev
```
Vite.js will provide a url to a local development servers in the terminal.


## System architecture
![Quizalicious-Architecture drawio](https://user-images.githubusercontent.com/5389940/204908283-a9d5eee1-1495-4b1d-96f0-46a34eeb07de.svg)


## What we have done
We have created!
- Login component, this component handles logins using Firebase
- CreateCccount component, this component handles account creation using Firebase
- Season component, this component shows a season, where the user can play games
- QuickGame component, this component allows the user to play a quick game.
- Game component, this component shows a game consisting of 5 questions. Questions from API.
- HomeScreen component, this component provides a homescreen
- Header component, this component provides a header to the web page.
- Highscore component, this component shows a highscore board for all users.
- Profile component, this shows information about the logged in user.

## What we still plan to do
We are planning on implementing achievements and further fix bugs and do more user testing.

## Project file structure
|               File/Folder                  |                      Description                      |
| ------------------------------------------ | ----------------------------------------------------- |
| /public/                                   | Contains images                                       |
| /src/                                      | Contains most of our source code                      |
| /src/presenters/                           | Contains all of our presenters                        |
| /src/presenters/createAccountPresenter.jsx | Presenter for the CreateAccount component             |
| /src/presenters/gamePresenter.jsx          | Presenter for the Game componenet                     |
| /src/presenters/headerPresenter.jsx        | Presenter for the Header component                    |
| /src/presenters/highscorePresenter.jsx     | Presenter for the Highscore component                 |
| /src/presenters/homeScreenPresenter.jsx    | Presenter for the HomeScreen component                |
| /src/presenters/loginPresenter.jsx         | Presenter for the Login component                     |
| /src/presenters/notLoggedInPresenter.jsx   | Presenter for the NotLoggedIn component               |
| /src/presenters/profilePresenter.jsx       | Presenter for the Profile component                   |
| /src/presenters/quickGamePresenter.jsx     | Presenter for the QuickGame component                 |
| /src/presenters/seasonPresenter.jsx        | Presenter for the Season component                    |
| /src/presenters/settingsPresenter.jsx      | Presenter for the Settigns component                  |
| /src/presenters/show.jsx                   | Component provides basic routing using hashtags       |
| /src/views/                                | Contains all of our views for our components          |
| /src/views/createAccountView.css           | Stylesheet for the CreateAccount component            |
| /src/views/createAccountView.jsx           | View for the AccountCreation component                |
| /src/views/gameView.css                    | Stylesheet for the Game component                     |
| /src/views/gameView.jsx                    | View for the Game component                           |
| /src/views/headerView.css                  | Stylesheet for the Header component                   |      
| /src/views/headerView.jsx                  | View for the Header component                         |
| /src/views/highscoreView.css               | Stylesheet for the Highscore component                |
| /src/views/highscoreView.jsx               | View for the Highscore component                      |
| /src/views/homeScreenView.css              | Stylesheet for the Highscore component                |
| /src/views/homeScreenView.jsx              | View for the HomeScreen component                     |
| /src/views/loginView.css                   | Stylesheet for the Login component                    |
| /src/views/loginView.jsx                   | View for the Login page component                     |
| /src/views/notLoggedInView.css             | Stylesheet for the NotLoggedIn component              |
| /src/views/notLoggedInView.jsx             | View for the NotLoggedIn component                    |
| /src/views/profileMenuView.css             | Stylesheet for the ProfileMenu component              |
| /src/views/profileMenuView.jsx             | View for the ProfileMenu component                    |
| /src/views/profileView.css                 | Stylesheet for the Profile component                  |
| /src/views/profileView.jsx                 | View for the Profile component                        |
| /src/views/promiseNoData.css               | Stylesheet for the loading bar, waiting for promise   |
| /src/views/promiseNoData.jsx               | View providing a loading bar, waiting for promise     |
| /src/views/quickGameView.css               | Stylesheet for the QuickGame component                |
| /src/views/quickGameView.jsx               | View for the QuickGame component                      |
| /src/views/seasonView.css                  | Stylesheet for the Season Component                   |
| /src/views/seasonView.jsx                  | View for the Season component                         |
| /src/views/settingsView.css                | Stylesheet for the Settings Component                 |
| /src/views/settingsView.jsx                | View for the Settings component                       |
| /src/animations.css                        | Stylesheet for animations used throughout the app     |
| /src/apiConfig.jsx                         | Contains configuration for our API, not commited      |
| /src/App.css                               | The stylesheet for the App component                  |
| /src/App.jsx                               | The App components, the base of our SPA               |
| /src/firebaseConfig.jsx                    | The firebase configuration file, not commited         |
| /src/firebaseModel.jsx                     | Contains functions related to firebase services       |
| /src/index.css                             | The stylesheet for basic DOM elements like buttons    |
| /src/main.jsx                              | Boostrap file for React                               |
| /src/navigation.js                         | Sets the default hash for navigation                  |
| /src/QuizModel.jsx                         | The model for the application.                        |
| /src/quizSource.jsx                        | Contains functions for interfacting with the API      |
| /src/resolvePromise.jsx                    | Helper functions for easy promise handeling           |
| /src/Root.jsx                              | Root component, contains the App component            |
| /.firebaserc                               | Settings for deploy targets, firebase                 |
| /.gitignore                                | Files to ignore when commiting                        |
| /firebase.json                             | Contains the hosting configuretion for Firebase       |
| /index.html                                | The index file, the starting point of the application |
| /package.json                              | The npm package files, defines all dependencies.      |
| /README.md                                 | Contains information about this project               |
| /styles.html                               | Basic page to showcase the basic styles for the app   |
| /vite.config.js                            | Contains configuration for Vite.js                    |


