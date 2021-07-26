// import from react.
import React, { useContext } from 'react';

// import from externals libraries.
import { Alert, AlertIcon } from '@chakra-ui/react';

// import from local files.
import { LoginContext } from '../../../contexts/loginContext';
import { AlertBox } from './LoginErrorStyles';

function LoginError() {
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

export default LoginError;