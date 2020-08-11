import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io'
import { RiMovieLine } from 'react-icons/ri';
import { Pagination } from 'semantic-ui-react'




const SectionCard = () => {
	const MainStyleCard = styled.div`
		padding: 35px 25px;
		display: flex;
		flex-flow: row wrap;
		flex-basis: auto;
		gap: 9px;
		align-content: center;
		text-align: center;
	`

	const MainStyleSection = styled.div`
		display: grid;
		grid-template-column: 1fr;
		gap: 8px;
	`
	const stylePaginate = {
		marginLeft: "25px"
	}


	 const titleStyle = {
	 	paddingLeft: "25px"
	 }

    const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(5);
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
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=star`)
		.then((response) => {
			setListeVideos(response.data.results);
		})
		.catch((error) => console.log(error))
	}, []);


	return(
		<>
			<MainStyleSection>
				<div>
					<Navbar bg="light" variant="light">
						<Navbar.Brand href="/">
							<IoIosMenu size={28} /><RiMovieLine size={12} />Picha
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
				<SectionTitle style={titleStyle} />
				<div style={stylePaginate} ><Pagination defaultActivePage={1} totalPages={10} /></div>
				<MainStyleCard>
					{listeVideos.map((movie) => 
						<Card idMovie={movie.id}
							  title={movie.title}
							  description={movie.overview}
							  image={movie.poster_path===null ? 'https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png':getImageMovieFromApi(movie.poster_path)} 
						/>
					)}
				</MainStyleCard>
			</MainStyleSection>
		</>
	)
}

export default SectionCard;