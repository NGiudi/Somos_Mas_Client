// import from react.
import React from "react";

// import from external libraries.
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Box, Button, Center, Input, Textarea } from "@chakra-ui/react";
import { Field, Formik, Form } from "formik";

// import services.
import { contactValidation } from '../../../services/validations/contactValidation';


const ContactForm = () => {
  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validationSchema={contactValidation}
    >
      <Form>
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

        <Field name="message">
          {({ field, form: { touched, errors } }) => (
            <Box mb="20px">
              <FormControl isInvalid={touched[field.name] && errors[field.name]}>
                <FormLabel htmlFor="message" mb="0px">Mensaje*</FormLabel>
                <Textarea {...field} name="message" placeholder="Ingrese el mensaje..." variant="flushed" resize="none" h="150px"/>
                <FormErrorMessage>{ errors[field.name] }</FormErrorMessage>
              </FormControl>
            </Box>
          )}
        </Field>
         
        <Center>
          <Button type="submit" mt="3">Enviar</Button>
        </Center>
      </Form>
    </Formik>
  );
};

export default ContactForm;