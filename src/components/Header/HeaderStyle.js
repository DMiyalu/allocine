import styled from 'styled-components';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';


export const HeaderLeft = styled.div`
	width: 50%;
	color: white;
	font-weight: 800;
	padding-top: 12px;
	padding-left: 10px;
	font-size: 22px;
`
export const HeaderRight = styled.div`
	width: 50%;
	padding-top: 9px;
`
export const InputStyle = styled(Input)`
	background-color: rgba(250, 250, 250, 0.7);
`

export const FormStyle = styled(Form)`
	display: flex;
	margin: 0;
	padding-right: 10px;

`


export const MainStyle = styled.div`
	background-color: rgba(90, 90, 90, 0.4);
	display: flex;
	flex-flow: row wrap;
	height: 60px;
	width: 100%;
	position: fixed;
	z-index: 9;
`

