import React from 'react';
import styled from 'styled-components';

const Footer = () => {

	const Style = styled.div`
		background: rgba(150, 150, 150, 1.00);
		text-align: center;
		height: 40px;
		color: white;
		padding-top: 9px;
		font-weight: 100;
		box-sizing: border-box;
		width: 100%;
	`


	return (
		<>
			<Style>Copyright &copy 2020, Picha.</Style>
		</>
	)
}

export default Footer;