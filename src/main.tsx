import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, theme } from '@chakra-ui/react'

const messages_fr = {
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <IntlProvider locale="fr" messages={messages_fr}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
