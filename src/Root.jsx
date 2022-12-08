import {
	firebaseModelPromise,
	updateFirebaseFromModel,
	updateModelFromFirebase,
} from "./firebaseModel.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Navigate
} from "react-router-dom";
import resolvePromise 	from "./resolvePromise.jsx";
import promiseNoData 	from "./views/promiseNoData.jsx";
import App 				from "./App.jsx";
import HomeScreen 		from "./presenters/homeScreenPresenter.jsx";
import Header 			from "./presenters/headerPresenter.jsx";
import Login 			from './presenters/loginPresenter';
import CreateACC 		from './presenters/createAccountPresenter.jsx';
import Season 			from './presenters/seasonPresenter.jsx';
import Game 			from './presenters/gamePresenter.jsx';
import Highscore 		from './presenters/highscorePresenter.jsx';
import Profile 			from './presenters/profilePresenter.jsx';
import QuickGame 		from './presenters/quickGamePresenter.jsx';
import Settings 		from './presenters/settingsPresenter.jsx';
import PageNotFound		from './presenters/pageNotFoundPresenter.jsx';

function Root() {
	const [promiseState] = React.useState({});
	const [, setError] = React.useState({});
	const [, setData] = React.useState({});
	function wasCreatedACB() {
		resolve(firebaseModelPromise());
	}
	function resolve(thePromise) {
		function promiseStateChangedACB() {
			setError(promiseState["error"]);
			setData(promiseState["data"]);
			if (promiseState.data) {
				updateFirebaseFromModel(promiseState.data);
				updateModelFromFirebase(promiseState.data);
			}
		}
		resolvePromise(thePromise, promiseState, promiseStateChangedACB);
	}
	React.useEffect(wasCreatedACB, []);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<App model={promiseState.data}/>} errorElement={<PageNotFound/>}>
				<Route exact path="/" 		element={<Navigate  to="/Login"/>}/>
				<Route path="Login" 		element={<Login 	model={promiseState.data} />} />
				<Route path="CreateAccount" element={<CreateACC model={promiseState.data} />} />
				<Route path="Home" 			element={<><Header 	model={promiseState.data} /><HomeScreen model={promiseState.data} /></>} />
				<Route path="Season" 		element={<><Header 	model={promiseState.data} /><Season 	model={promiseState.data} /></>} />
				<Route path="Game" 			element={<><Header 	model={promiseState.data} /><Game 		model={promiseState.data} /></>} />
				<Route path="QuickGame" 	element={<><Header 	model={promiseState.data} /><QuickGame 	model={promiseState.data} /></>} />
				<Route path="Profile" 		element={<><Header 	model={promiseState.data} /><Profile 	model={promiseState.data} /></>} />
				<Route path="Highscore" 	element={<><Header 	model={promiseState.data} /><Highscore 	model={promiseState.data} /></>} />
				<Route path="Settings" 		element={<><Header 	model={promiseState.data} /><Settings 	model={promiseState.data} /></>} />
			</Route>
		)
	);

	return promiseNoData(promiseState) || <RouterProvider router={router} />;
	return promiseNoData(promiseState) || <App model={promiseState.data} />;
}

export default Root;
