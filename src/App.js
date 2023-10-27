// App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './core/i18n';

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
