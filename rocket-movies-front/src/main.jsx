import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Styling
*/
import GlobalStyles from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';


/*
Pages
*/
// import { SignIn } from './pages/SignIn/';
import { SignUp } from './pages/SignUp/';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>,
)
