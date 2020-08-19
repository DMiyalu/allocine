import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Card from '../Card';
import YouTube from 'react-youtube';
import BlackLivesMatter from '../BlackLivesMatter';
import { MainStyle, HeaderStyle, LinkStyle, ContentCards, IFrame, PaginateContent, PaginateStyle, BlackLivesMatterContent } from './ContainerStyle';
import styled from 'styled-components';
import { Pagination } from 'semantic-ui-react';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import { Link } from "react-router-dom";
import axios from 'axios';


const Container = () => {

	const [texteRecherche, setTexteRecherche] = useState("");
	const [listeVideos, setListeVideos] = useState([]);



	const loadMovies = async() => {
		const res = await axios.get(
		'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + texteRecherche
		);
		setListeVideos(res.data.results);
	}

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=star`)
		.then((response) => {
			setListeVideos(response.data.results);
		})
		.catch((error) => console.log(error))
	}, []);


	return(
		<>
			<HeaderStyle>
				<Header />
			</HeaderStyle>
			<BlackLivesMatterContent>
				<BlackLivesMatter/>
			</BlackLivesMatterContent>
			<MainStyle>
				<ContentCards>
					{listeVideos.map((movie) => 
						<LinkStyle to={`/movie/${movie.id}`} >
							<Card description={movie.title}
								image={movie.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(movie.poster_path)} 
							/>
						</LinkStyle>
					)}
				</ContentCards>
			</MainStyle>
			<PaginateStyle>
			</PaginateStyle>
		</>
	)
}

export default Container;