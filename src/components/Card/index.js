import React from 'react';
import { MainStyle, Img, ImgFile, ImgDescription } from './CardStyle';


const Card = (props) => {

	return(
		<>
			<MainStyle>
				<Img>
					<ImgFile src={props.image} />
				</Img>
				<ImgDescription>
					<p>
						{props.description}
					</p>
				</ImgDescription>
			</MainStyle>
		</>
	)
}


export default Card;