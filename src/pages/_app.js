import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import db from '../../db.json';

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
