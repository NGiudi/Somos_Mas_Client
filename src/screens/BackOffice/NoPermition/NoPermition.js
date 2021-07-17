// imports from react.
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// imports from external libraries.
import { Button } from '@chakra-ui/react';

// improt from local files.
import LottieComponent from '../../../components/LottieComponent/LottieComponent';
import Header from '../../../components/WebPages/Header/Header';
import Footer from '../../../components/WebPages/Footer/Footer';

// import styles.
import { Content, Message, Title, Image, TextBox } from './NoPermitionStyles';

// import constants.
import error from '../../../assets/lottie/43438-403-error-page-brown.json';
import { BTN_GO_TO_HOME } from '../../../constants/buttons';

function NoPermition() {
  return (
    <Fragment>
      <Header/>
      
      <Content>
        <Image>
          <LottieComponent animation={error} w="10px"/>
        </Image>

        <TextBox>
          <Title>Error de Permisos</Title> 
          <Message>Está página está restringida y no se puede acceder. Debe contar con los permisos de administrador para acceder a la misma. Para más información consultarnos.</Message>
          <Link to="/">
            <Button>{BTN_GO_TO_HOME}</Button>
          </Link>
        </TextBox>
      </Content>
      
      <Footer/>
    </Fragment>
  );
}

export default NoPermition;
