import React, { useEffect, useState } from 'react';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import { Link, useParams } from "react-router-dom";
import { MediaStyle, MediaHeading } from './style';
import Header from '../Header';
import { Media } from 'reactstrap';
import axios from 'axios';


const DetailsMovie = (props) => {
  	let { id } = useParams();
  	const params = { id };
  	const [movie, setMovie] = useState({});

	useEffect(() => {

		axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_TOKEN}&language=fr`)
		.then((response) => {
			console.log(response.data)
			setMovie(response.data);
		})
		.catch((error) => console.log(error))
	})

	return(
		<>
			<Header />
		    <MediaStyle>
		      	<Media left href="#">
		        	<Media object 
		        		src={getImageMovieFromApi(movie.poster_path)} 
		        		alt="Generic placeholder image" />
		      	</Media>
		      	<MediaHeading body>
			        <Media heading>
			         	{movie.title}
			        </Media>
		       			{movie.overview}
		     	</MediaHeading>
		    </MediaStyle>
		</>
	)
}

export default DetailsMovie;