import { createBrowserRouter } from 'react-router-dom';
import Login, { loginAction } from './pages/authentication/login';
import LandingPage from './pages/landing/landing-page';
import LandingLayout from './pages/landing/landing-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import FileUploader, { uploadAction } from './pages/dashboard/file-uploader/file-uploader';
import Profile from './pages/dashboard/profile/profile';
import UserList from './pages/dashboard/users/users-list';

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
        element: <UserList/>,
        action: uploadAction,
        errorElement: <UserList/>,
        index: true
      },
      {
        path: 'func-one',
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>
      },
      {
        path: 'func-two',
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>
      },
      {
        path: 'func-three',
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>
      },
      {
        path: 'func-four',
        element: <FileUploader/>,
        action: uploadAction,
        errorElement: <FileUploader/>
      },
      {
        path: 'users',
        element: <UserList/>,
        errorElement: <UserList/>
      },
      {
        path: 'profile',
        element: <Profile/>,
        errorElement: <Profile/>
      }
    ]
  }
]);

export default router;
