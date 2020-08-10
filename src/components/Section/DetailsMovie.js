import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import axios from 'axios';

const DetailsMovie = () => {

	const CardSelected = styled.div`
		background-color: blue;
	`

	const [movie, setMovie] = useState([]);
	let id = 0;
	id = localStorage.getItem("id");
	console.log(id);


	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
		.then((response) => {
			console.log(response.data)
			setMovie(response.data)
		})
		.catch((error) => console.log(error))
	})


	return(
		<>
			<Card title={movie.title}
				  description={movie.overview}
				  image={movie.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(movie.poster_path)} 
			/>
		</>
	)
}

export default DetailsMovie;