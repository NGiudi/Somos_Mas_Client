// imports from react.
import React from 'react';
import { Link } from 'react-router-dom';

// import styles.
import { Button, Li, NavbarWrapper } from '../headerStyles';

const Navbar = () => {

  return (
    <NavbarWrapper >
      <Link to="/news">
        <Li>Noticias</Li>
      </Link>

      <Link to="/activities">
        <Li>Actividades</Li>
      </Link>
      
      <Link to="/about-us">
        <Li>Nosotros</Li>
      </Link>
      
      <Link to="/contact">
        <Li>Contacto</Li>
      </Link>
      
      <Link to="/login">
        <Button>Iniciar Sesión</Button>
      </Link>  
    </NavbarWrapper>
  )
}

export default Navbar
