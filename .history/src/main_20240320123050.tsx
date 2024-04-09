import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <IntlProvider locale="fr" messages={messages_fr}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
