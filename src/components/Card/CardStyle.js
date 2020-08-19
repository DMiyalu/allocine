import styled from 'styled-components';

export const MainStyle = styled.div`
	border-radius: 3px;
	width: 190px;
	height: 220px;
	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 255, 0.2);
	margin-top: 10px;
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
`
export const ImgDescription = styled.div`
	color: rgba(10, 10, 10, 0.8);
	font-size: 24px;
`

export const Img = styled.div`
	width: 100%;
	height: 70%;
`

export const ImgFile = styled.img`
	width: max-content;
	max-width: 100%;
	height: 100%;
	max-height: min-content;
	object-fit: cover;
	-webkit-filter: grayscale(0) blur(0px);
	filter: grayscale(0) blur(0px);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
	&:hover {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
		-moz-box-shadow: 0 0 10px #ccc;
    	-webkit-box-shadow:2px 2px 2px 1px rgba(0, 0, 255, .2);
      	box-shadow: 2px 2px 2px px rgba(0, 0, 255, .2);
      	color: blue;
	}
`
