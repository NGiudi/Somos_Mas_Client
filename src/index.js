// imports from react.
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

// import from external libraries.
import { ChakraProvider } from "@chakra-ui/react"

// import from locals files.
import store from './store/Store';
import App from './App';

// import styles.
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);