export const API_TOKEN = "a91871d18f81bacedc6625e1210dd334";

export function getMovieFromApi(title) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + title
	return fetch(url)
	.then((response) => response.json())
	.catch((error) => console.log(error))
}

export function getImageMovieFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300' + name;
}