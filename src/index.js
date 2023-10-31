import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TotalSavingsProvider } from './contexts/TotalSavings';
import { SettingsProvider } from './contexts/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <TotalSavingsProvider>
          <App />
        </TotalSavingsProvider>
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();