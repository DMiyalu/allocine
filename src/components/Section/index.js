import React from 'react';
import SectionTitle from './SectionTitle';
import SectionAllMovies from './SectionAllMovies';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
} from "react-router-dom";


const Section = () =>  {

	const MyStyle = styled.section`
		padding: 15px 25px;
	`

	return(
		<>
			<Router>	
				<MyStyle>
					<SectionTitle />
					<SectionAllMovies />
				</MyStyle>
			</Router>
		</>
	)
}

export default Section;