// imports react.
import React, { useContext } from 'react';

// import externals libraries.
import { Alert, AlertIcon } from '@chakra-ui/react';

// imports from locals files.
import { LoginContext } from '../../../contexts/loginContext';
import { AlertBox } from './LoginErrorStyles';

export default function LoginError() {
  const { loginError } = useContext(LoginContext);

  if (loginError === null)
    return null;

  return (
    <AlertBox>
      <Alert status="error" variant="left-accent">
        <AlertIcon />
          {loginError}
      </Alert>
    </AlertBox>
  );
}
