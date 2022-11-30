
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
- Game component, this component shows a game consisting of 5 questions. Questions from API.
- HomeScreen component, this component provides a homescreen
- Header component, this component provides a header to the web page.

## What we still plan to do
We are planning on implementing the Highscore component and Profile component.

## Project file structure
|                   File                     |                      Description                      |
| ------------------------------------------ | ----------------------------------------------------- |
| /.firebaserc                               | Settings for deploy targets, firebase                 |
| /.gitignore                                | Files to ignore when commiting                        |
| /firebase.json                             | Contains the hosting configuretion for Firebase       |
| /index.html                                | The index file, the starting point of the application |
| /package.json                              | The npm package files, defines all dependencies.      |
| /README.md                                 | Contains information about this project               |
| /vite.config.js                            | Contains configuration for Vite.js                    |
| /public                                    | Contains images                                       |
| /src/apiConfig.jsx                         | Contains configuration for our API, not commited      |
| /src/App.css                               | The stylesheet for all our custom components          |
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
| /src/presenters/createAccountPresenter.jsx | Presenter for the CreateAccount component             |
| /src/presenters/gamePresenter.jsx          | Presenter for the Game componenet                     |
| /src/presenters/headerPresenter.jsx        | Presenter for the Header component                    |
| /src/presenters/homeScreenPresenter.jsx    | Presenter for the HomeScreen component                |
| /src/presenters/loginPresenter.jsx         | Presenter for the Login component                     |
| /src/presenters/seasonPresenter.jsx        | Presenter for the Season component                    |
| /src/presenters/show.jsx                   | Component provides basic routing using hashtags       |
| /src/views/createAccountView.jsx           | View for AccountCreation page                         |
| /src/views/gameView.jsx                    | View for the Game component                           |
| /src/views/headerView.jsx                  | View for the Header component                         |
| /src/views/homeScreenView.jsx              | View for the HomeScreen component                     |
| /src/views/loginView.jsx                   | View for the Login page component                     |
| /src/views/profileMenuView.jsx             | View for the ProfileMenu component                    |
| /src/views/promiseNoData.jsx               | View providing a loading bar, waiting for promise     |
| /src/views/seasonView.jsx                  | View for the Season component                         |
