import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { theme } from '@styles/theme';
import { AuthProvider } from '@hooks/useAuth';
import GlobalStyle from '@styles/globalStyle';
import InitProvider from '@components/initProvider/InitProvider';
import { SERVER_URL } from '@constants/url';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import App from './App';

axios.defaults.baseURL = SERVER_URL;
/** @description for refreshToken */
axios.defaults.withCredentials = true;

dayjs.locale(ko);
dayjs.extend(relativeTime);

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
