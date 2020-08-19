import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { API_TOKEN, getImageMovieFromApi } from '../../API/TMDBApi';


const MovieCard = (props) => {

	const CardStyle = {
		width: "150px",
		maxWidth: "150px",
		height: "135px"
	}


	return(
		<>
			<Link to="/detailsMovie" >
				<div>
					<Card onClick={() => { localStorage.setItem("id", JSON.stringify(props.idMovie))}} >
					 	<Card.Img style={CardStyle} variant="top" src={props.image} alt="affiche du film"/>
					 	<Card.Body>
					   		<Card.Title style={{ height:"45px" }} >{props.title} </Card.Title>
					    	<Button variant="primary" onClick={props.detailsLink} >Voir détails</Button>
						</Card.Body>
					</Card>
				</div>
			</Link>
		</>
	)
}

export default MovieCard;