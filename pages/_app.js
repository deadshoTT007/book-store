import '../styles/globals.css'
// import { ThemeProvider } from "@mui/styles";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {normalTheme} from '../constants/theme'
function MyApp({ Component, pageProps }) {
  let applyTheme = createTheme(normalTheme);
  return <ThemeProvider theme={applyTheme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
