import React from 'react';
import { RiMovieLine } from 'react-icons/ri';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailsHeader = () => {

	const Style = styled.div`
		height: 40px;
		background-color: #ddd;
		width: 100%;
		text-align: center;
		padding-top: 9px;
		position: fixed;
	`

	return(
		<>	
			<Link to="/" >
				<Style><RiMovieLine size={12} />Picha</Style>
			</Link>
		</>
	)
}

export default DetailsHeader;