import React from 'react';
import styled from 'styled-components';


const SectionTitle = () => {
	const MainStyleTitle = styled.div`
		border-bottom: 1px solid gray;
		padding-bottom: 3px;
	`

	const TitleStyle = styled.h1`
		color: blue;
		font-size: 20px;
	`

	return(
		<>
			<MainStyleTitle>
				<TitleStyle>Recommandés pour vous</TitleStyle>
			</MainStyleTitle>
		</>
	)
}

export default SectionTitle;