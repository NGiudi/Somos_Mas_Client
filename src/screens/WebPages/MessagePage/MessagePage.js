// import from react.
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import from external libraries.
import { Button } from "@chakra-ui/react";

// import from local files.
import LottieComponent from "../../../components/WebPages/LottieComponent/LottieComponent";
import { Content, Message, Title, Image, TextBox } from "./MessagePageStyles";
import PageLayout from "../PageLayout";

function MessagePage({data}) {
	return (
		<PageLayout>
			<Content>
				<Image>
					<LottieComponent animation={data.lottie} w="10px"/>
				</Image>

				<TextBox>
					<Title>{data.title}</Title> 
					<Message>{data.text}</Message>
					<Link to={data.buttonLink}>
						<Button>{data.buttonName}</Button>
					</Link>
				</TextBox>
			</Content>
		</PageLayout>
	);
}

MessagePage.propTypes = {
	data: PropTypes.shape({
		buttonLink: PropTypes.string,
		buttonName: PropTypes.string,
		lottie: PropTypes.any,
		text: PropTypes.string,
		title: PropTypes.string,
	})
};

MessagePage.propTypes = {
	data: PropTypes.shape({
		buttonLink: "/",
		buttonName: "button",
		lottie: null,
		text: "debes ingresar un texto",
		title: "titulo del mensaje",
	})
};

export default MessagePage;
