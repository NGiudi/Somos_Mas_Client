// imports from react.
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

// imports externals libraries.
import { Center, IconButton, Image, Text } from '@chakra-ui/react';

//imports from local files.
import logo from '../../../assets/img/logo-somos-mas-blanco.png';

// imports local styles.
import { Container, Flex, Icon, LinkDom, Nav } from './StylesFooter';

const Footer = () => {
  const { facebook, instagram, linkedin } = useSelector((state) => state.organization);

  return (
    <Container>
      <Nav>
        <Flex>
          <LinkDom to="/activities">
            Actividades
          </LinkDom>

          <LinkDom to="/news">
            Novedades
          </LinkDom>
        </Flex>

        <LinkDom to="/">
          <Image src={logo} alt="logo somos más" w="120px" />
        </LinkDom>

        <Flex>
          <LinkDom to="/about-us">
            Nosotros
          </LinkDom>

          <LinkDom to="/contact">
            Contacto
          </LinkDom>
        </Flex>
      </Nav>

      <Center mt="20px">
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <IconButton isRound="true" mx="10px">
            <Icon className="fab fa-facebook" />
          </IconButton>
        </a>

        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <IconButton isRound="true" mx="10px">
            <Icon className="fab fa-instagram" />
          </IconButton>
        </a>

        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <IconButton isRound="true" mx="10px">
            <Icon className="fab fa-linkedin-in" />
          </IconButton>
        </a>
      </Center>
        
      <Center mt="10px">
        <Text as="small" textAlign="center" color="grey" fontSize="xs">
          2021 by Alkemy All Rights Reserved.
        </Text>
      </Center>
    </Container>
  );
};

export default memo(Footer);