import React, { useState, useEffect } from 'react';
import Card from './Card';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import { Menu } from 'semantic-ui-react';
import { RiMovieLine } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DetailsMovie = () => {
	const Style = styled.div`
		display: grid;
		grid-template-column: 1fr;
		column-gap: 5px;
	`

	const Title = styled.h2`
		font-weight: bold;
		font-size: 20px;
	`

	const StyleContent = styled(Style)`
		padding: 5px 35px;
	`

	const TexteStyle = styled.div`
		
	`

	const CardStyle = styled.img`
		width: max-content;
		maw-width: 100%;
		height: 280px;
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
			<Style>
				<CardStyle />
				{movie.map((movie) => 
					<StyleContent>
						<Title>{movie.title}</Title>
						<TexteStyle>{movie.overview}</TexteStyle>
					</StyleContent>
				)}
			</Style>
		</>
	)
}

export default DetailsMovie;