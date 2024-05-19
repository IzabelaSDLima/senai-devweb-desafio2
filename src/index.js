import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReservasProvider } from './providers/reservasProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReservasProvider>
      <App />
    </ReservasProvider>
  </React.StrictMode>
);
