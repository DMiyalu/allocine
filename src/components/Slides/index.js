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
			<Slider duration={3000} autoplay >
				{slidesList.map((slide, index) => <CardSlide key={index}>
						<CardSlideText> {slide.title} </CardSlideText>
						<CardSlideImg src={slide.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(slide.poster_path)} />
					</CardSlide>
				)}
			</Slider>
		</>
	)
}

export default Slides;