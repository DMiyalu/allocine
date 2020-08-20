import styled from 'styled-components';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";


export const HeaderLeft = styled.div`
	width: 50%;
	color: white;
	font-weight: 800;
	padding-top: 9px;
	padding-left: 7px;
	font-size: 22px;
	box-sizing: content-box;
	@media (max-width: 600px) {
    	text-align: center;
    	background-color: rgba(30, 30, 30, 0.7);
    	width: 100%;
    	max-width: 100%;
    }
`

export const HeaderRight = styled.div`
	width: 50%;
	padding-top: 12px;
	@media (max-width: 600px) {
    	margin-left: 25%;
    	box-sizing: content-box;
    	padding-left: 2%;
    }
`

export const InputStyle = styled(Input)`
	background-color: rgba(250, 250, 250, 0.7);
	border: 2px solid yellow;
	width: 400px;
	min-width: 300px;
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


export const MainStyle = styled.div`
	background-color: rgba(90, 90, 90, 0.4);
	display: flex;
	flex-direction: row;
	width: 100%;
	max-content: 100%;
	height: 60px;
	position: fixed;
	z-index: 9;

	@media screen and (min-width: 200px) and (max-width: 640px) {
    	display: grid;
    	grid-template-column: 1fr;
    	width: 100%;
    	max-width: 100%;
    	justify-content: center;
    	margin: 0;
    	height: 100px;
    }
`

export const LinkStyle = styled(Link)`
	color: white;
`

export const ButtonStyle = styled(Button)`
	color: yellow;
	font-weight: 600;
`