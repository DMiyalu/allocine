import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import getImageMovieFromApi from '../../API/TMDBApi';
import { BrowserRouter as Router, Link } from "react-router-dom";


const MovieCard = (props) => {


	return(
		<>
			<Link to="/detailsMovie" >
				<div>
					<Card onClick={() => { localStorage.setItem("id", JSON.stringify(props.idMovie))}} >
					 	<Card.Img style={{ width: "max-content", maxWidth:"100%", height: "100px" }} variant="top" src={props.image} alt="affiche du film"/>
					 	<Card.Body>
					   		<Card.Title style={{ height:"35px" }} >{props.title} </Card.Title>
					    	<Button variant="primary" onClick={props.detailsLink} >Voir détails</Button>
						</Card.Body>
					</Card>
				</div>
			</Link>
		</>
	)
}

export default MovieCard;