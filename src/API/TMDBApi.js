import axios from 'axios';

export const API_TOKEN = "a91871d18f81bacedc6625e1210dd334";

export function getMovieFromApi(title) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + title
	return fetch(url)
	.then((response) => response.json())
	.catch((error) => console.log(error))
}

export function getPopularFilm(title) {
  	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=fr&query=${title}`
	return axios.get(url)
	.then(response => {
		console.log("data: ", response.data.results);
	})
	.catch((error) => console.log(error))

}


export function getImageMovieFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300' + name;
}