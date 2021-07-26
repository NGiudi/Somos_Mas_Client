// import from react.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import from external libraries. 
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

// import from local files.
import { logout } from '../../../../store/UserStore/UserStore';
import { ArrowDonw } from '../headerStyles';

// import constants.
import { ROLE_ID_ADMIN } from '../../../../constants/numbers';

function AvatarMenu() {
  const { roleId } = useSelector (state => state.user); 
  const dispatch = useDispatch();

  const closeSesion = () => {
    localStorage.removeItem("token");
    dispatch (logout());
  }

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <ArrowDonw className="fas fa-sort-down"></ArrowDonw>
        </MenuButton>
  
        <MenuList>
          <Link to="/user-profile">
            <MenuItem>Perfil</MenuItem>
          </Link>
          
          { roleId === ROLE_ID_ADMIN ?
            (
              <Link to="/backoffice">
                <MenuItem>Backoffice</MenuItem>
              </Link>
            ) : (null)
          }

          <MenuItem onClick={closeSesion}>Cerrar Sesion</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AvatarMenu;