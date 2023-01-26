import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import translation_es_mx from './translations/es_mx/translation.json';
import translation_es_col from './translations/es_col/translation.json';
import translation_en from './translations/en/translation.json';
import ClientProvider from './context/Client/ClientProvider';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es_mx',
  resources: {
    es_mx: {
      translation: translation_es_mx 
    },
    es_col: {
      translation: translation_es_col
    },
    en: {
      translation: translation_en
    }
  }
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ClientProvider>
        <App />
      </ClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
