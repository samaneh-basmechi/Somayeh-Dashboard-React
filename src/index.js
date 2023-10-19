import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { AppProvider } from './contex/app/app-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);

