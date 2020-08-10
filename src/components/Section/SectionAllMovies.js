import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import movieImage from './movieImage.jpeg';
import { getMovieFromApi, getImageMovieFromApi, API_TOKEN } from '../../API/TMDBApi';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io'
import { RiMovieLine } from 'react-icons/ri';




const SectionCard = () => {
	const MainStyleCard = styled.div`
		border: 1px solid black;
		padding: 15px 10px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		text-align: center;
		gap: 15px 10px;
	`

	const [texteRecherche, setTexteRecherche] = useState("");
	const [listeVideos, setListeVideos] = useState([]);


	const loadMovies = async() => {
		const res = await axios.get(
			'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + texteRecherche
		);
		console.log(res.data.results);
		setListeVideos(res.data.results);
		console.log(listeVideos);

	}

	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + 'star')
		.then((response) => setListeVideos(response.data.results))
		.catch((error) => console.log(error))
	}, []);

	return(
		<>
			<div>
				<Navbar bg="light" variant="light">
					<Navbar.Brand href="#home">
						<IoIosMenu size={28} /><RiMovieLine size={12} />AlloCiné
					</Navbar.Brand>
					<Nav className="mr-auto">
				     	<Nav.Link href="#home"></Nav.Link>
				    </Nav>
				    <Form inline>
				     	<FormControl onChange={(e) => setTexteRecherche(e.target.value)} type="text" placeholder="Rechercher" className="mr-sm-2" />
				     	<Button variant="outline-primary" onClick={() => loadMovies()} >Search</Button>
				    </Form>
				</Navbar>
			</div>

			<MainStyleCard>
				{listeVideos.map((movie) => 
					<Card idMovie={movie.id}
						  title={movie.title}
						  description={movie.overview}
						  image={movie.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(movie.poster_path)} 
					/>
				)}
			</MainStyleCard>
		</>
	)
}

export default SectionCard;