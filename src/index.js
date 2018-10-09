import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware  } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = configureStore(middleware);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
