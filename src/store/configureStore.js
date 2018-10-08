import {createStore, combineReducers, compose} from 'redux';
import persistState from 'redux-localstorage';
import reducers from "../reducers";

const enHancer = compose(
	persistState('user')
)

const rootReducer = combineReducers({
	...reducers
})

export default function configureStore() {
	return createStore(rootReducer,{},enHancer)
}