import styled from 'styled-components';
import { Pagination } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export const MainStyle = styled.div`
	padding: 5px 25px;
	background-color: rgba(10, 10, 10, 1.00);
	@media (max-width: 600px) {
    	
    }
`

export const ContentCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	row-gap: 3px;
	margin: 0;
	box-sizing: content-box;
	margin-top: 30px;
	@media (max-width: 600px) {
    	display: flex;
    	flex-direction: column;
    	padding-left: 13%;
    }

`

export const IFrame = styled.iframe`
	position: absolute;
  	top: 0;
  	left: 0;
  	bottom: 0;
  	right: 0;
  	width: 100%;
  	height: 100%;
`

export const PaginateStyle = styled.div`
	width: 65%;
	text-align: center;
`

export const PaginateContent = styled(Pagination)`
	margin-left: 25px;
	text-align: center;
`

export const BlackLivesMatterContent = styled.div`
	padding-top: 60px;
	@media (max-width: 600px) {
    	padding-top: 100px;
    }
`


export const LinkStyle = styled(Link)`
	&:hover {
		text-decoration: none;
	}
`

export const HeaderStyle = styled.div																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													`
	@media (max-width: 600px) {
    	width: max-content;
    	max-width: 100%;
    }
`

export const Categories = styled.div`
	background-color: rgba(255,255,0, 0.8);
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 100px;
`

export const CategoriesItem = styled.div`
	border: 1px solid black;
	border-radius: 3px;
	height: 38px;
	width: 100px;
	text-align: center;
	padding-top: 8px;
	&:hover {
		border: none;
		background-color: rgba(90, 90, 90, 0.9);
		font-weight: 500;
		color: yellow;
		cursor: pointer;
	}
`