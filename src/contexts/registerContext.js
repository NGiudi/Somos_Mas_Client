// imports from react.
import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// import local files.
import { registerUser } from "../services/axios/queries/login";
import { ToastAlert } from "../services/alerts/alerts";

// import constants.
import { ALERT_ERROR, BACKEND_CONNECTION_ERROR, REGISTER_ERROR } from "../constants/messages";
import { HTTP_CODE_200, HTTP_CODE_400 } from "../constants/numbers";
import { REGISTER_QUERY } from '../constants/queries';

export const RegisterContext = createContext();

export function RegisterProvider (props) {
  const [registerFetchEnable, setRegisterFetchEnable] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const querySettings = {
    enabled: registerFetchEnable,
  }

  // queries.
  const { isLoading, isSuccess, isError, data } = useQuery([REGISTER_QUERY, userData], () => registerUser(userData), querySettings);
  
  useEffect(() => {
    if (isSuccess) {
      console.log (data);
      if (data.status === HTTP_CODE_200) {
        localStorage.setItem("token", data.data);
        setRegisterError(null);
        window.location.href = '/';
      }
      if (data.status === HTTP_CODE_400) {
        setRegisterError(REGISTER_ERROR);
      }
      setRegisterFetchEnable(false);
    }
    // query error.
    else if (isError) {
      ToastAlert ({ icon: ALERT_ERROR, title: BACKEND_CONNECTION_ERROR });
      setRegisterFetchEnable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, registerFetchEnable]);

  const onSubmitRegister = async (data) => {
    setUserData(data);
    setRegisterFetchEnable(true);
  }

  return (
    <RegisterContext.Provider value={{ onSubmitRegister, registerError, registerFetchEnable }}>
      {props.children}
    </RegisterContext.Provider>
  );
}