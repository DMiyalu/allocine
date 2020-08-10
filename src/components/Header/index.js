import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io'
import { RiMovieLine } from 'react-icons/ri';
import 	styled from 'styled-components';


const Header = () => {

	const [texteRecherche, setTexteRecherche] = useState("");
	console.log(texteRecherche);

	
	return (
		<div>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<IoIosMenu size={28} /><RiMovieLine size={12} />AlloCiné
				</Navbar.Brand>
				<Nav className="mr-auto">
			     	<Nav.Link href="#home"></Nav.Link>
			    </Nav>
			    <Form inline>
			     	<FormControl onChange={(e) => setTexteRecherche(e.target.value)} type="text" placeholder="Rechercher" className="mr-sm-2" />
			     	<Button variant="outline-primary" >Search</Button>
			    </Form>
			</Navbar>
		</div>
	);
}

export default Header;