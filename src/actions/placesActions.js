import * as helpers from '../helpers/places';

export function loadPlaces(places) {
	return {type: 'LOAD_PLACES', places};
}

export function loadAll(){
	return (dispatch, getState) => {
		helpers.getPlaces().then(res => {
			// console.log(res.docs.docs);
			dispatch(loadPlaces(res.docs.docs))
		})
	}
}