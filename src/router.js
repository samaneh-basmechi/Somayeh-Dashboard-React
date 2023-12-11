import {createBrowserRouter} from 'react-router-dom';
import Login from './pages/authentication/login';
import LandingPage from './pages/landing/landing-page';
import LandingLayout from './pages/landing/landing-layout';
import DashboardLayout from './pages/dashboard/dashboard-layout';
import Profile from './pages/dashboard/profile/profile';
import UserList from './pages/dashboard/users/users-list';
import FileUploaderDevOnline, {
  uploadActionDevOnline
} from "./pages/dashboard/file-uploader/dev/dev-online/file-uploader-dev-online";
import FileUploaderDevBatch, {
  uploadActionDevBatch
} from "./pages/dashboard/file-uploader/dev/dev-batch/file-uploader-dev-batch";
import FileUploaderIntOnline, {
  uploadActionIntOnline
} from "./pages/dashboard/file-uploader/int/int-online/file-uploader-int-online";
import FileUploaderIntBatch, {
  uploadActionIntBatch
} from "./pages/dashboard/file-uploader/int/int-batch/file-uploader-int-batch";
import FileUploaderTestOnline, {
  uploadActionTestOnline
} from "./pages/dashboard/file-uploader/test/test-online/file-uploader-test-online";
import FileUploaderTestBatch, {
  uploadActionTestBatch
} from "./pages/dashboard/file-uploader/test/test-batch/file-uploader-test-batch";
import FileUploaderEntwickler, {uploadActionEntwickler} from "./pages/dashboard/file-uploader/entwickler/entwickler";

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
        element: <Profile/>,
        errorElement: <Profile/>,
        index: true
      },
      {
        path: 'dev/online',
        element: <FileUploaderDevOnline/>,
        action: uploadActionDevOnline,
        errorElement: <FileUploaderDevOnline/>
      },
      {
        path: 'dev/batch',
        element: <FileUploaderDevBatch/>,
        action: uploadActionDevBatch,
        errorElement: <FileUploaderDevBatch/>
      },
      {
        path: 'int/online',
        element: <FileUploaderIntOnline/>,
        action: uploadActionIntOnline,
        errorElement: <FileUploaderIntOnline/>
      },
      {
        path: 'int/batch',
        element: <FileUploaderIntBatch/>,
        action: uploadActionIntBatch,
        errorElement: <FileUploaderIntBatch/>
      },

      {
        path: 'test/online',
        element: <FileUploaderTestOnline/>,
        action: uploadActionTestOnline,
        errorElement: <FileUploaderTestOnline/>
      },
      {
        path: 'test/batch',
        element: <FileUploaderTestBatch/>,
        action: uploadActionTestBatch,
        errorElement: <FileUploaderTestBatch/>
      },
      {
        path: 'entwickler',
        element: <FileUploaderEntwickler/>,
        action: uploadActionEntwickler,
        errorElement: <FileUploaderEntwickler/>
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
