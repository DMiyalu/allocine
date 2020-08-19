import styled from 'styled-components';
import { Pagination } from 'semantic-ui-react';


export const MainStyle = styled.div`
	padding: 5px 25px;

`

export const ContentCards = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
	row-gap: 3px;
	margin: 0;
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
`