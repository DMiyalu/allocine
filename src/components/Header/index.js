import React, { useState } from 'react';
import { RiMovieLine } from 'react-icons/ri';
import 	styled from 'styled-components';
import axios from 'axios';
import { API_TOKEN } from '../../API/TMDBApi';
import { InputStyle, LinkStyle, FormStyle, ButtonStyle, MainStyle, HeaderLeft, HeaderRight } from './HeaderStyle';


const Header = (props) => {

	const styleColor = {
		color: "yellow",
		fontWeight: "600"
	}

	const [texteRecherche, setTexteRecherche] = useState("");
	const [movie, setMovie] = useState([]);
	console.log(texteRecherche);

	const sendData = event => {
    	localStorage.setItem('moviesData', texteRecherche);
	};

	function loadMovies(){
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=star`)
		.then((response) => {
			setMovie(response.data.results);
		})
		.catch((error) => console.log(error))

	}
		return (
		<MainStyle>
			<HeaderLeft>
				<LinkStyle to="/" >
					<RiMovieLine color="yellow" />Picha
				</LinkStyle>
			</HeaderLeft>
			<HeaderRight>
				<FormStyle>
			        <InputStyle type="text" placeholder="Recherche" onChange={(e) => setTexteRecherche(e.target.value)} />
			        <ButtonStyle onClick={sendData} >Rechercher</ButtonStyle>
			     </FormStyle>
			</HeaderRight>
		</MainStyle>
	);
}

export default Header;