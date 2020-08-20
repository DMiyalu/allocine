import styled from 'styled-components';


export const MainStyle = styled.h2`
	color: white;
	background: url(${(props)=>props.imgUrl}) no-repeat fixed center;
	background-size: contain;
	height: 400px;
	text-align: center;
	padding: 7px 5px;
	font-size: 18px;
	box-sizing: content-box;
	@media (max-width: 600px) {
		margin-top: 100px;
    }
`
