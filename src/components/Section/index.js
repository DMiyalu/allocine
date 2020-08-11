import React from 'react';
import SectionAllMovies from './SectionAllMovies';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
} from "react-router-dom";


const Section = () =>  {

	const MyStyle = styled.section`
		
	`

	return(
		<>
			<Router>	
				<MyStyle>
					<SectionAllMovies />
				</MyStyle>
			</Router>
		</>
	)
}

export default Section;