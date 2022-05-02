import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { theme } from '@styles/theme';
import { AuthProvider } from '@hooks/useAuth';
import GlobalStyle from '@styles/globalStyle';
import InitProvider from '@components/initProvider/InitProvider';
import App from './App';

/** @todo edit to server url */
axios.defaults.baseURL = 'http://localhost:3000';
/** @description for refreshToken */
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <AuthProvider>
          <InitProvider>
            <App />
          </InitProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
