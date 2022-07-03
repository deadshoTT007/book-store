import '../styles/globals.css'
// import { ThemeProvider } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { normalTheme } from '../constants/theme';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

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
  return <React.Fragment>
    <Head>
      <title>Chasmabazaar</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={applyTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </React.Fragment>
}

export default MyApp
