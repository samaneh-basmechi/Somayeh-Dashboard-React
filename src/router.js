import { createBrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Login, { loginAction } from './pages/authentication/login';
import LandingPage from './pages/landing/landing-page';
import LandingLayout from './pages/landing/landing-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import FileUploader, { uploadAction } from './pages/dashboard/file-uploader/file-uploader';
import User from './pages/dashboard/users/user';

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
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout/>,
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
      },
      {
        path: 'users',
        element: <User/>,
        action: uploadAction,
        errorElement: <User/>
      }
    ]
  }

]);

export default router;
