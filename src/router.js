import { createBrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Login, { loginAction } from './pages/authentication/login';
import LandingPage from './pages/landing/landing-page';
import LandingLayout from './pages/landing/landing-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import FileUploader, { uploadAction } from './pages/dashboard/file-uploader/file-uploader';
import User from './pages/dashboard/users/user';
import Profile from './pages/dashboard/profile/profile';

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
        errorElement: <Login />
      },
      {
        path: '',
        element: <LandingPage />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        element: <User />,
        action: uploadAction,
        errorElement: <User />,
        index: true
      },
      {
        path: 'func-one',
        element: <FileUploader />,
        action: uploadAction,
        errorElement: <FileUploader />
      },
      {
        path: 'func-two',
        element: <FileUploader />,
        action: uploadAction,
        errorElement: <FileUploader />
      },
      {
        path: 'func-three',
        element: <FileUploader />,
        action: uploadAction,
        errorElement: <FileUploader />
      },
      {
        path: 'func-four',
        element: <FileUploader />,
        action: uploadAction,
        errorElement: <FileUploader />
      },
      {
        path: 'users',
        element: <User />,
        errorElement: <User />
      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <Profile />
      }
    ]
  }

]);

export default router;
