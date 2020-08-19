import React, { useEffect } from 'react';
import { API_TOKEN } from '../../API/TMDBApi';
import axios from 'axios';


const DetailsMovie = (props) => {

	let id = 3

	useEffect(() => {
		const { match: { params } } = this.props;
		axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`)
		.then((response) => {
			console.log(response.data)
		})
		.catch((error) => console.log(error))
	})

	return(
		<>
			<p>Details movie</p>
		</>
	)
}

export default DetailsMovie;