// imports from react. 
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// imports from externals libraries.
import { Image } from '@chakra-ui/react';

// imports from local files.
import AvatarMenu from './Menus/AvatarMenu';
import Navbar from './Menus/Navbar';

// import styles.
import { HeaderBox } from "./headerStyles";
import logo from '../../../assets/logo-somos-mas-blanco.png';

function Header() {
  const { roleId } = useSelector(state => state.user);

  return (
    <HeaderBox>            
      {/* Logo */}
      <Link to="/">
        <Image width={["70px", "100px"]} src={logo} alt="logo somos más" />
      </Link>
        
      <Navbar />
      
      { /* UserProfile */
        roleId ? (<AvatarMenu />) : null
      }
    </HeaderBox>
  );
}

export default Header