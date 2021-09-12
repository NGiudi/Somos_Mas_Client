// import from react.
import React, { useContext } from "react";

// import from externals libraries.
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Field, Formik, Form } from "formik";

// import from local files.
import { loginValidation } from "../../../services/validations/loginValidation";
import { LoginContext } from "../../../contexts/loginContext";
import { BtnRegister } from "./LoginFormStyles";

// import constants.
import { BLUE } from "../../../constants/colors";

export default function LoginForm() {
	const { onSubmitLogin, loginFetchEnable } = useContext(LoginContext);

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={ loginValidation }
			onSubmit={ values => onSubmitLogin(values) }
		>
			<Form style={{ padding: "0 10%" }}>            
				<Field name="email">
					{({ field, form: { touched, errors } }) => (
						<Box mb="20px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="email" mb="0px">Email*</FormLabel>
								<Input {...field} type="email" name="email" placeholder="Ingrese su email..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>

				<Field name="password">
					{({ field, form: { touched, errors } }) => (
						<Box mb="10px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="password" mb="0px">Contraseña*</FormLabel>
								<Input {...field} type="password" name="password" placeholder="Ingrese su contraseña..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>

				<BtnRegister to="/register"> Crear una cuenta nueva </BtnRegister>

				<Center py="20px">
					<Button isLoading={loginFetchEnable} colorScheme="blue" color={BLUE} variant="outline" type="submit">
            Ingresar
					</Button>
				</Center>
			</Form>
		</Formik>
	);
}
