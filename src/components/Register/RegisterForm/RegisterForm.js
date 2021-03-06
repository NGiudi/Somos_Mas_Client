// import from react.
import React, { useContext } from "react";

// import from external libraries.
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Field, Formik, Form } from "formik";

// import services.
import { registerValidation } from "../../../services/validations/registerValidation";
import { RegisterContext } from "../../../contexts/registerContext";

// import constants.
import { BLUE } from "../../../constants/colors";

function RegisterForm() { 
	const { onSubmitRegister, registerFetchEnable } = useContext(RegisterContext);

	return (
		<Formik
			initialValues={{ name: "", lastname: "", email: "", password: "" }}
			validationSchema={registerValidation}
			onSubmit={values => { onSubmitRegister(values); }}
		>
			<Form style={{ padding: "0 10%" }}>
				<Field name="name">
					{({ field, form: { touched, errors } }) => (
						<Box mb="20px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="name" mb="0px">Nombre*</FormLabel>
								<Input {...field} type="text" name='name' placeholder="Ingrese su nombre..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>
        
				<Field name="lastname">
					{({ field, form: { touched, errors } }) => (
						<Box mb="20px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="lastname" mb="0px">Apellido*</FormLabel>
								<Input {...field} type="text" name='lastname' placeholder="Ingrese su apellido..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>
 
				<Field name="email">
					{({ field, form: { touched, errors } }) => (
						<Box mb="20px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="email" mb="0px">Email*</FormLabel>
								<Input {...field} type="text" name='email' placeholder="Ingrese su email..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>
        
				<Field name="password">
					{({ field, form: { touched, errors } }) => (
						<Box mb="20px">
							<FormControl isInvalid={touched[field.name] && errors[field.name]}>
								<FormLabel htmlFor="password" mb="0px">Contrase??a*</FormLabel>
								<Input {...field} type="password" name='password' placeholder="Ingrese su contrase??a..." variant="flushed"/>
								<FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
							</FormControl>
						</Box>
					)}
				</Field>

				<Center pt="20px" mb="40px">
					<Button isLoading={registerFetchEnable} colorScheme="blue" color={BLUE} variant="outline" type="submit">
            Registrarse
					</Button>
				</Center>
			</Form>
		</Formik>
	);
}

export default RegisterForm;
