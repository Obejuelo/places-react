export default function placesReducer (state = [], action) {
	switch (action.type) {
		case 'LOAD_PLACE':
			return action.places
	
		default:
			return state;
	}
}