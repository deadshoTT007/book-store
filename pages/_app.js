import '../styles/globals.css'
import React, {useEffect,useState} from 'react'
// import { ThemeProvider } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { normalTheme } from '../constants/theme';
import Head from 'next/head';
import { useRouter } from 'next/router'

import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from "redux";
// import {configureStore,compose, applyMiddleware} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AuthenticationProvider from 'AuthenticationProvider';
import Spinner from '@/components/Spinner';
import Router from 'next/router';
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
  const [testComp, settestComp] = useState(false)



  Router.onRouteChangeComplete = url => {
    // Some page has finished loading
    settestComp(false) // set state to pass to loader prop
}

  let applyTheme = createTheme(normalTheme);
  const app = <Component {...pageProps} />


  return(
  <Provider store={store}>
  <React.Fragment>
    <Head>
      <title>Book Store</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={applyTheme}>
    <AuthenticationProvider {...pageProps}>
  <Component {...pageProps} />
      {/* <Component {...pageProps} /> */}
    </AuthenticationProvider>

    </ThemeProvider>
  </React.Fragment>
  </Provider>
  )
}

export default MyApp
