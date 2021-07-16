// imports from react. 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// imports from external libraries.
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

// imports from local files.
import logo from '../../../assets/logo-somos-mas-blanco.png';
import AvatarMenu from './Menus/AvatarMenu';

// import styles.
import { BgColor, Button, Flex, HeaderBox, Li, MenuButtonWrapper, NavbarWrapper } from "./headerStyles";

function Header() {
  const { name } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  const handleMenuHamburguer = () => {
    setOpen(!open);
  }

  return (
    <BgColor>
      <HeaderBox>
        {!open ? (
          <MenuButtonWrapper onClick={handleMenuHamburguer}>
            <HamburgerIcon w={7} h={7} color="#FFF" />
          </MenuButtonWrapper>
        ) : (
          <MenuButtonWrapper onClick={handleMenuHamburguer}>
            <SmallCloseIcon w={7} h={7} color="#FFF" />
          </MenuButtonWrapper>
        )}
        
        <Flex>
          <Link to="/">
            <Image width={["70px", "120px"]} src={logo} alt="logo somos más" />
          </Link>
                
          <NavbarWrapper open={open}>
            <Li to="/news">Noticias</Li>
            <Li to="/activities">Actividades</Li>
            <Li to="/about-us">Nosotros</Li>
            <Li to="/contact">Contacto</Li>
          </NavbarWrapper>
        </Flex>
        
        { /* UserProfile */
          name !== "" ? (<AvatarMenu />) : (<Button to="/login">Iniciar Sesión</Button>)
        }
        
      </HeaderBox>
    </BgColor>
  );
}

export default Header