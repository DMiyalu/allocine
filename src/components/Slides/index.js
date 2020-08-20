import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import { CardSlide, CardSlideImg, CardSlideText } from './style';
import  { API_TOKEN, getImageMovieFromApi, getPopularFilm, getMovieFromApi } from '../../API/TMDBApi';
import 'react-animated-slider/build/horizontal.css';
import axios from 'axios';

const Slides = () => {

	const [slidesList, setSlidesList] = useState([]);

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=star`)
		.then(async(response) => {
			await setSlidesList(response.data.results);
		})
		.catch((error) => console.log(error))
	}, []);


	return(
		<>
			
		</>
	)
}

export default Slides;