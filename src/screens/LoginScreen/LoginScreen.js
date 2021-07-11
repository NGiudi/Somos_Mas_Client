// imports from react.
import React from 'react';
import { Link } from 'react-router-dom';

// import externals libraries.
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Box, Button, Center, Image, Input } from '@chakra-ui/react';
import { Field, Formik, Form } from 'formik';

// import from local files.
import { BgWhite, BtnRegister, CenterForm, LogoContainer, Title } from './LoginStyles';
import { loginValidation } from '../../services/validations/loginValidation';
import logo from '../../assets/logo-somos-mas.png';

// imports constants.
import { BTN_LOGIN } from '../../constants/buttons';
import { BLUE } from '../../constants/colors';

// Export Component
function LoginScreen() {

  return (
    <CenterForm>
      <BgWhite>
        <LogoContainer>
          <Link to="/">
            <Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
          </Link>
        </LogoContainer>

        <Title>Iniciar Sesión</Title>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidation}
          onSubmit={values => {}}
        >
          <Form style={{ padding: "0 10%" }}>            
            <Field name="email">
              {({ field, form: { touched, errors } }) => (
                <Box mb="20px">
                  <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                    <FormLabel htmlFor="email" mb="0px">Email*</FormLabel>
                    <Input {...field} type="email" name="email" placeholder="Ingrese su email..." variant="flushed"/>
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
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
                    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                  </FormControl>
                </Box>
              )}
            </Field>

            <BtnRegister to="/register"> Crear una cuenta nueva </BtnRegister>

            <Center py="20px">
              <Button colorScheme="blue" color={BLUE} variant="outline" type="submit">
                {BTN_LOGIN}
              </Button>
            </Center>
          </Form>
        </Formik>
      </BgWhite>
    </CenterForm>
  );
}

export default LoginScreen;