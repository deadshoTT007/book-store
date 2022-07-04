import '../styles/globals.css'
// import { ThemeProvider } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { normalTheme } from '../constants/theme';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from "redux";
// import {configureStore,compose, applyMiddleware} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from '../store/reducers/index'

let composeEnhancers = compose;
if (typeof window !== "undefined")
{
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


function MyApp({ Component, pageProps }) {

  const [mount, setMount] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    setMount(true)
    // router.reload()
  }, []);


  let applyTheme = createTheme(normalTheme);
  return(
  <Provider store={store}>
  <React.Fragment>
    <Head>
      <title>Chasmabazaar</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={applyTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </React.Fragment>
  </Provider>
  )
}

export default MyApp
