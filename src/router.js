import { createBrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Login, { loginAction } from './features/authentication/Login';
import LandingPage from './pages/landing-page';
import LandingLayout from './layouts/landing-layout';
import Otp from './features/authentication/otp';
import ResetPassword from './features/authentication/reset-password';
import Dashboard from './pages/dashboard/dashboard';
import FileUploader, { uploadAction } from './features/file-uploader/file-uploader';

const router = createBrowserRouter([
  {
    element: <LandingLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>,
        action: loginAction,
        errorElement: <Login/>
      },
      {
        path: '',
        element: <LandingPage/>
      },
      {
        path: 'otp',
        element: <Otp/>
      },
      {
        path: 'reset-password',
        element: <ResetPassword/>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard/>,
    children: [
      {
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>,
        index: true
      },
      {
        path: 'func-one',
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>
      }
    ]
  }

]);

export default router;
