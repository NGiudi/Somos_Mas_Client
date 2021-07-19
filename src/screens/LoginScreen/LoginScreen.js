// imports from react.
import React from 'react';
import { Link } from 'react-router-dom';

// import externals libraries.
import { Image } from '@chakra-ui/react';

// import from local files.
import { BgWhite, CenterForm, LogoContainer, Title } from './LoginStyles';
import LoginError from '../../components/Login/LoginError/LoginError';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import { LoginProvider } from '../../contexts/loginContext';
import logo from '../../assets/img/logo-somos-mas.png';

// Export Component
function LoginScreen() {

  return (
    <LoginProvider>
      <CenterForm>
        <BgWhite>
          <LogoContainer>
            <Link to="/">
              <Image ml="10px" w="90px" src={logo} alt="logo somos más"/>
            </Link>
          </LogoContainer>

          <Title>Iniciar Sesión</Title>
          <LoginError/>
          <LoginForm />
        </BgWhite>
      </CenterForm>
    </LoginProvider>
  );
}

export default LoginScreen;