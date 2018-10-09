import config from '../config/config';

export const getPlaces = () => {
	return fetch(`${config.url}places`)
		.then(res => res.json())
		.catch(console.log())
}
export const getPlace = (id) => {
	return fetch(`${config.url}places/${id}`)
		.then(res => res.json())
		.catch(console.log())
}

export const signIn = (body) => {
	return fetch(`${config.url}session`,{
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(console.log())
}

export const register = (body) => {
	return fetch(`${config.url}users`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
		.then(res => res.json())
		.catch(console.log())
}

export default {
	places: [
		{
			imageUrl: '/images/img1.jpg',
			title: 'Desayunos el rey',
			description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
			address: 'Calle Villa Alta #15'
		},
		{
			imageUrl: '/images/img2.jpg',
			title: 'Starbucks Norte',
			description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
			address: 'Calle Villa Alta #15'
		},
		{
			imageUrl: '/images/img3.jpg',
			title: 'Pizza de amor',
			description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
			address: 'Calle Villa Alta #15'
		}
	]
}
