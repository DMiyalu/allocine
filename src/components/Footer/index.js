import React from 'react';
import styled from 'styled-components';
import { Main, Copyright, About, Twitter, Instagram, Pinterest, Facebook, Infos, InfosTitle, ButtonStyle, InfosSocialLinks, Newsletter, NewsletterText, InputStyle, FormStyle } from './style';

const Footer = () => {


	return (
		<>
			<Main>
				<About>
					<Infos>
						<InfosTitle>Bienvenue chez Picha</InfosTitle>
						<Newsletter>
							<NewsletterText>
								Inscrivez-vous à notre newslleter pour voir les annonces sur tous les films.
							</NewsletterText>
							<FormStyle>
								<InputStyle placeholder="E-mail" />
								<ButtonStyle>Envoyer</ButtonStyle>
							</FormStyle>
						</Newsletter>
						<InfosSocialLinks>
							<Facebook />
							<Twitter />
							<Instagram />
							<Pinterest />
						</InfosSocialLinks> 
					</Infos>
				</About>
				<Copyright>Copyright &copy 2020, Picha.</Copyright>
			</Main>
		</>
	)
}

export default Footer;