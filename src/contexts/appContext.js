// imports from react.
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

// imports fron local files.
import { getUser } from '../services/axios/queries/login';
import { ToastAlert } from '../services/alerts/alerts';
import { login } from '../store/UserStore/UserStore';

// imports constants.
import { ALERT_ERROR, BACKEND_CONNECTION_ERROR } from '../constants/messages';
/* import { HTTP_CODE_200, HTTP_CODE_400 } from '../constants/numbers'; */
import { USER_QUERY } from '../constants/queries';

export const AppContext = createContext();

export function AppProvider(props) {
  const [fetchUser, setFetchUser] = useState(false);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const querySettings = {
    enabled: fetchUser,
  }

  const {isLoading, isSuccess, isError, data} = useQuery([USER_QUERY, token], () => getUser(token), querySettings);
  
  useEffect (() => {
    const storageToken = localStorage.getItem("token");

    if (storageToken) {
      setToken(storageToken);
      setFetchUser(true);
    }
  },[]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data.data));
    }
    else if (isError) {
      ToastAlert ({ icon: ALERT_ERROR, title: BACKEND_CONNECTION_ERROR });
      setFetchUser(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <AppContext.Provider value={{  }}>
      {props.children}
    </AppContext.Provider>
  );
}