// imports from react.
import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

// import from local files.
import { loginUser } from '../services/axios/queries/login';
import { ToastAlert } from '../services/alerts/alerts';

// imports constants
import { ALERT_ERROR, BACKEND_CONNECTION_ERROR, LOGIN_ERROR } from '../constants/messages';
import { HTTP_CODE_200, HTTP_CODE_400 } from '../constants/numbers';
import { LOGIN_QUERY } from '../constants/queries';

export const LoginProvider = (props) => {
  const history = useHistory();

  const [loginFetchEnable, setLoginFetchEnable] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const querySettings = {
    enabled: loginFetchEnable,
  }

  // queries.
  const {isLoading, isSuccess, isError, data} = useQuery([LOGIN_QUERY, userData], () => loginUser(userData), querySettings);
  
  useEffect(() => {
    if (isSuccess) {
      // password or email invalid.
      if (data.status === HTTP_CODE_400)
        setLoginError(LOGIN_ERROR);
      // login success.
      else if (data.status === HTTP_CODE_200) {
        localStorage.setItem ("token", data.data);
        setLoginError(null);
        history.push('/');
      }
    }
    // query error.
    else if (isError)
      ToastAlert ({ icon: ALERT_ERROR, title: BACKEND_CONNECTION_ERROR });

    setLoginFetchEnable(false);
  }, [isLoading, loginFetchEnable]);

  const onSubmitLogin = async (data) => {
    setUserData(data);
    setLoginFetchEnable(true);
  }
   
  return (
    <LoginContext.Provider value={{onSubmitLogin, loginError, loginFetchEnable}}>
      {props.children}
    </LoginContext.Provider>
  );
}

export const LoginContext = createContext();