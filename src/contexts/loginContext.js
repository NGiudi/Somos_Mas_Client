// import from react.
import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';

// import from local files.
import { loginUser } from '../services/axios/queries/login';
import { ToastAlert } from '../services/alerts/alerts';

// import constants.
import { ALERT_ERROR, BACKEND_CONNECTION_ERROR, LOGIN_ERROR } from '../constants/messages';
import { HTTP_CODE_200, HTTP_CODE_400 } from '../constants/numbers';
import { LOGIN_QUERY } from '../constants/queries';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [loginFetchEnable, setLoginFetchEnable] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const querySettings = {
    enabled: loginFetchEnable
  }

  const {isLoading, isSuccess, isError, data} = useQuery([LOGIN_QUERY, userData], () => loginUser(userData), querySettings);
  
  useEffect(() => {
    if (isSuccess) {
      if (data.status === HTTP_CODE_400) {
        // password or email invalid.
        setLoginError(LOGIN_ERROR);
      }
      else if (data.status === HTTP_CODE_200) {
        // login success.
        localStorage.setItem("token", data.data);
        setLoginError(null);
        window.location.href = '/';
      }
      setLoginFetchEnable(false);
    }
    else if (isError){
      // query error.
      ToastAlert ({ icon: ALERT_ERROR, title: BACKEND_CONNECTION_ERROR });
      setLoginFetchEnable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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