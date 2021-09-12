// import from react.
import React from "react";
import { Link } from "react-router-dom";

// import from external libraries.
import { Image } from "@chakra-ui/react";

// import from local files.
import RegisterError from "../../components/Register/RegisterError/RegisterError";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";
import { BgWhite, CenterForm, LogoContainer, Title } from "./RegisterStyles";
import { RegisterProvider } from "../../contexts/registerContext";
import logo from "../../assets/img/logo-somos-mas.png";

function RegisterScreen() {
	return (
		<RegisterProvider>
			<CenterForm>
				<BgWhite>
					<LogoContainer>
						<Link to="/">
							<Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
						</Link>
					</LogoContainer>
          
					<Title>Crear Usuario</Title>
					<RegisterError/>
					<RegisterForm/>
				</BgWhite>
			</CenterForm>
		</RegisterProvider>
	);
}

export default RegisterScreen;