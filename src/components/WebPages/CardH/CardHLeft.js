// import from react.
import React from "react";
import PropTypes from "prop-types";

// import from external libraries.
import { Box } from "@chakra-ui/react";

// import from local files. 
import { Image, Section, SecTitle } from "./CardHStyles";

function CardHLeft(props) {
	const { title, content, imageURL, imageAlt } = props.data;
  
	return (
		<Section>
			<Image src={imageURL} alt={imageAlt}/>

			<Box maxW="800px">
				<SecTitle>{title}</SecTitle>
				<p>{content}</p>
			</Box>
		</Section>
	);
}

CardHLeft.propTypes = {
	data: PropTypes.shape({
		content: PropTypes.string,
		imageAlt: PropTypes.string,
		imageURL: PropTypes.string,
		title: PropTypes.string
	})
};

CardHLeft.defaultProps = {
	data: {
		content: "debes pasar un contenido.",
		imageAlt: "",
		imageURL: "",
		title: "debes pasar el titulo"
	}
};

export default CardHLeft;