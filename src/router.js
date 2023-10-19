import { createBrowserRouter } from 'react-router-dom';
import Login, { loginAction } from './features/authentication/Login';
import LandingPage from './pages/landing-page';
import LandingLayout from './layouts/landing-layout';
import Otp from './features/authentication/otp';
import ResetPassword from './features/authentication/reset-password';
import AdminPanel from './pages/admin-panel';

const router = createBrowserRouter([
  {
    element: <LandingLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>,
        action: loginAction,
        errorElement: <Login />
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
    element: <AdminPanel/>,
  }

]);

export default router;
