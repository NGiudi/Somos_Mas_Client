// imports from react.
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NoPermition from './NoPermition/NoPermition';

// imports constants.
import { ROLE_ID_ADMIN } from '../../constants/numbers';

function Backoffice() {
  const [loading, setLoading] = useState(true);
  
  const { roleId } = useSelector(state => state.user);
  
  useEffect(() => {
    // waiting for roleId to update.
    setTimeout(() => setLoading(false), 1);
  }, [])

  if(loading)
    return null

  if (roleId !== ROLE_ID_ADMIN)
    return ( <NoPermition /> );
  
  return (
    <p>estoy dentro</p>
  );
}

export default Backoffice;