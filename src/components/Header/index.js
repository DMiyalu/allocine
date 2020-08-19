import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { RiMovieLine } from 'react-icons/ri';
import 	styled from 'styled-components';
import { InputStyle, FormStyle, MainStyle, HeaderLeft, HeaderRight } from './HeaderStyle';


const Header = (props) => {

	const [texteRecherche, setTexteRecherche] = useState("");
	console.log(texteRecherche);

	
		return (
		<MainStyle>
			<HeaderLeft><RiMovieLine />Picha</HeaderLeft>
			<HeaderRight>
				<FormStyle>
			        <InputStyle type="text" placeholder="Recherche" onChange={(e) => setTexteRecherche(e.target.value)} />
			        <Button>Rechercher</Button>
			     </FormStyle>
			</HeaderRight>
		</MainStyle>
	);
}

export default Header;