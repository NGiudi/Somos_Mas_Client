// imports react.
import React, { useContext } from 'react';

// import externals libraries.
import { Alert, AlertIcon } from '@chakra-ui/react';

// imports from locals files.
import { RegisterContext } from '../../../contexts/registerContext';
import { AlertBox } from './RegisterErrorStyles';

function RegisterError() {
  const { registerError } = useContext(RegisterContext);

  if (registerError === null)
    return null;

  return (
    <AlertBox>
      <Alert status="error" variant="left-accent">
        <AlertIcon />
          {registerError}
      </Alert>
    </AlertBox>
  );
}

export default RegisterError;