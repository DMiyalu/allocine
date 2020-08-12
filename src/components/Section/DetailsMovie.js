import React, { useState, useEffect } from 'react';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import { Menu } from 'semantic-ui-react';
import { RiMovieLine } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DetailsHeader from './DetailsHeader';


const DetailsMovie = () => {
	const Style = styled.div`
		display: grid;
		grid-template-column: 1fr;
		gap: 35px;
	`

	const Title = styled.h2`
		font-weight: bold;
		font-size: 22px;
		color: blue;
	`

	const StyleContent = styled.div`
		padding: 5px 35px;
		display: flex;
		flex-flwo: row wrap;
		gap: 10px;
		height: 500px;
		margin-top: 90px;
	`

	const TexteStyle = styled.div`
		font-size: 16px;
		
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
				
				<DetailsHeader />	
				<StyleContent> 					
						<>
							<div>
								<img src={movie.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(movie.poster_path)} alt="image film" />
							</div>
							<div>
								<Title>{movie.title} </Title>
								<TexteStyle>{movie.overview}</TexteStyle>
							</div>
						</>
				</StyleContent>
			</Style>
		</>
	)
}

export default DetailsMovie;