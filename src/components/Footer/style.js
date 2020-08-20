import styled from 'styled-components';
import { Button, Input, Form } from 'reactstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';


export const Main = styled.footer`
	background-color: rgba(90, 90, 90, 0.4);
	text-align: center;
	height: 180px;
	color: white;
	padding-top: 9px;
	font-weight: 100;
	box-sizing: border-box;
	width: 100%;
	padding-bottom: 0;
`

export const Copyright = styled.div`
	text-align: center;
	height: 40px;
	width: 100%;
	color: white;
	padding-top: 8px;
	background-color: rgba(20, 20, 20, 0.9);
`

export const About = styled.div`
	width: 100%;
	height: 100%;
`

export const Newsletter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

export const NewsletterText = styled.p`
	font-weight: 350;
`

export const Infos = styled.div`

`

export const InfosTitle = styled.div`
	font-weight: 600;
	font-size: 20px;
`

export const InfosContentAdress = styled.div`

`

export const InfosSocialLinks = styled.div`

`


export const InputStyle = styled(Input)`
	background-color: rgba(250, 250, 250, 0.7);
	border: 2px solid yellow;
	border-radius: 3px;
	width: 220px;
	@media screen and (min-width: 200px) and (max-width: 640px) {
    	width: 200px;
    }
`

export const FormStyle = styled(Form)`
	display: flex;
	margin: 0;
	width: max-content;
	max-width: 100%;
	float: right;
	padding-right: 20px;
	@media (max-width: 600px) {
 
    }
`

export const ButtonStyle = styled(Button)`
	color: yellow;
	font-weight: 600;
`

export const Facebook = styled(FaFacebookF)`
	color: yellow;
`

export const Twitter = styled(FaTwitter)`
	color: yellow;
`

export const Instagram = styled(FaInstagram)`
	color: yellow;
`

export const Pinterest = styled(FaPinterest)`
	color: yellow;
`
