// import from react.
import React from "react";
import { useSelector } from "react-redux";

// import from external libraries.
import { Box } from "@chakra-ui/react";

// import from local files.
import ContactForm from "../../../components/WebPages/ContactForm/ContactForm";
import { Rectangular, Title } from "../../../assets/styles/globalStyles";
import { BackImage, Bold, ContactGrid, ContactItem, FormBox, Header, HeaderText } from "./ContactStyles";
import PageLayout from "../PageLayout";

function ContactScreen() {
	const { adress, email, phone, city } = useSelector(state => state.organization);

	return (
		<PageLayout>
			<Header>
				<BackImage src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
				<Title>Contactanos</Title>
				<Rectangular />

				<HeaderText>Si está interesado en saber más acerca de nuestra organización, o está dispuesto a colabarorar con nuestro proposito, 
        no dude en contactarnos. Estaremos respondiendo lo más rápido posible su consulta.</HeaderText>
			</Header>

			<ContactGrid>
				<FormBox>
					<ContactForm />
				</FormBox>
          
				<Box w="80%" m=" 0 auto 0 auto">
					<Bold>Direccion:</Bold>
					<ContactItem>{ adress }</ContactItem>
					<ContactItem>{ city }</ContactItem>
          
					<Bold>Telefono:</Bold> 
					<ContactItem>{ phone }</ContactItem>
             
					<Bold>Email:</Bold>
					<ContactItem>{ email }</ContactItem>
				</Box>
			</ContactGrid>     
		</PageLayout>
	);
}

export default ContactScreen;