import React from 'react';
import styled from 'styled-components';


const SectionTitle = () => {
	const MainStyleTitle = styled.div`
		border-bottom: 1px solid rgba(170,170,255,0.3);
		padding-bottom: 3px;
		margin: 0 25px;
	`

	const TitleStyle = styled.h1`
		color: black;
		font-size: 16px;
		color: rgba(10, 10, 10, 0.8);
	`

	return(
		<>
			<MainStyleTitle>
				<TitleStyle>Les plus recherchés</TitleStyle>
			</MainStyleTitle>
		</>
	)
}

export default SectionTitle;