import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/authentication/login';
import LandingPage from './pages/landing/landing-page';
import LandingLayout from './pages/landing/landing-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import FileUploaderInt, { uploadAction } from './pages/dashboard/file-uploader/int/file-uploader-int';
import Profile from './pages/dashboard/profile/profile';
import UserList from './pages/dashboard/users/users-list';
import FileUploaderDevOnline from "./pages/dashboard/file-uploader/dev-online/file-uploader-dev-online";
import FileUploaderDevBatch from "./pages/dashboard/file-uploader/dev-batch/file-uploader-dev-batch";
import FileUploaderTest from "./pages/dashboard/file-uploader/test/file-uploader-test";

const router = createBrowserRouter([
  {
    element: <LandingLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>,
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
        path: 'dev/online',
        element: <FileUploaderDevOnline/>,
        action: uploadAction,
        errorElement: <FileUploaderDevOnline/>
      },
      {
        path: 'dev/batch',
        element: <FileUploaderDevBatch/>,
        action: uploadAction,
        errorElement: <FileUploaderDevBatch/>
      },
      {
        path: 'int',
        element: <FileUploaderInt/>,
        action: uploadAction,
        errorElement: <FileUploaderInt/>
      },
      {
        path: 'test',
        element: <FileUploaderTest/>,
        action: uploadAction,
        errorElement: <FileUploaderTest/>
      },
      // {
      //   path: 'prod',
      //   element: <FileUploaderInt/>,
      //   action: uploadAction,
      //   errorElement: <FileUploaderInt/>
      // },
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
