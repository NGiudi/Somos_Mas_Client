// imports from react.
import React from 'react';
import { Link } from 'react-router-dom';

// imports from externals libraries.
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Box, Button, Center, Image, Input } from '@chakra-ui/react';
import { Field, Formik, Form } from 'formik';

// imports from local files.
import { BgWhite, CenterForm, LogoContainer, Title } from './RegisterStyles';
import { registerValidation } from '../../services/validations/registerValidation';
import logo from '../../assets/img/logo-somos-mas.png';

// imports constants.
import { BTN_REGISTER } from '../../constants/buttons';
import { BLUE } from '../../constants/colors';

function RegisterScreen() {

  return (
    <CenterForm>
      <BgWhite>
        <LogoContainer>
          <Link to="/">
            <Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
          </Link>
        </LogoContainer>
        
        <Title>Crear Usuario</Title>

        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
          validationSchema={registerValidation}
          onSubmit={values => { }}
        >
          <Form style={{ padding: "0 10%" }}>
            <Field name="firstName">
              {({ field, form: { touched, errors } }) => (
                <Box mb="20px">
                  <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                    <FormLabel htmlFor="firstName" mb="0px">Nombre*</FormLabel>
                    <Input {...field} type="text" name='firstName' placeholder="Ingrese su nombre..." variant="flushed"/>
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                  </FormControl>
                </Box>
              )}
            </Field>
        
            <Field name="lastName">
              {({ field, form: { touched, errors } }) => (
                <Box mb="20px">
                  <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                    <FormLabel htmlFor="lastName" mb="0px">Apellido*</FormLabel>
                    <Input {...field} type="text" name='lastName' placeholder="Ingrese su apellido..." variant="flushed"/>
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
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
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                  </FormControl>
                </Box>
              )}
            </Field>
        
            <Field name="password">
              {({ field, form: { touched, errors } }) => (
                <Box mb="20px">
                  <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                    <FormLabel htmlFor="password" mb="0px">Contraseña*</FormLabel>
                    <Input {...field} type="password" name='password' placeholder="Ingrese su contraseña..." variant="flushed"/>
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Center pt="20px" mb="40px">
              <Button colorScheme="blue" color={BLUE} variant="outline" type="submit">
                { BTN_REGISTER }
              </Button>
            </Center>
          </Form>
        </Formik>
      </BgWhite>
    </CenterForm>
  );
};

export default RegisterScreen;