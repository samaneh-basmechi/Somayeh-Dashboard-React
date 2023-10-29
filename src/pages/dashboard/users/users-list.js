import React, { useState, useEffect } from 'react';
import { httpService } from '../../../core/http-service.js';
import Permission from '../../../assets/images/permission.svg';
import Key from '../../../assets/images/key.svg';
import SetPermission from './set-permissions.js';
import ResetPassword from './reset-password.js';
import Register from './registrer.js';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [openSetPermissionModal, setOpenSetPermissionModal] = useState(false);

  const openSetPermission = () => {
    setOpenSetPermissionModal(true);
  };

  const closeSetPermission = () => {
    setOpenSetPermissionModal(false);
  };

  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);

  const openResetPassword = () => {
    setOpenResetPasswordModal(true);
  };

  const closeResetPassword = () => {
    setOpenResetPasswordModal(false);
  };

  useEffect(() => {
    httpService.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="overflow-auto h-[calc(100vh_-_80px)] p-4 bg-white dark:bg-black overflow-hidden">
      <div className="flex flex-col m-2">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="dark:shadow overflow-hidden sm:rounded-lg">
              <div className="flex justify-end mb-4">
                <Register/>
              </div>
              <table className="min-w-full text-sm text-black dark:text-gray-400">
                <thead className="bg-gray-200 dark:bg-gray-800 text-xs uppercase font-medium">
                <tr>
                  <th></th>
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-center tracking-wider">
                    Permissions
                  </th>
                  <th scope="col" className="px-6 py-3 text-center tracking-wider">
                    Reset Password
                  </th>
                </tr>
                </thead>
                <tbody className="bg-gray-300 dark:bg-gray-800">
                <tr className="bg-black bg-opacity-20 hover:bg-gray-500">
                  <td className="pl-4 font-bold text-black dark:text-white">
                    1
                  </td>
                  <td className="flex px-6 text-black font-bold dark:text-white py-4 whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 text-black font-bold dark:text-white whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openSetPermission}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100"
                      height="125"
                      viewBox="0 0 100 125">
                      <path
                        d="M82.3,43.1c-14.8-5.4-30.6-6.9-45.9-4.7V25.9c0-7.5,6.1-13.6,13.6-13.6s13.6,6.1,13.6,13.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C73.4,13,62.9,2.5,50,2.5C37.1,2.5,26.6,13,26.6,25.9v14.4c-3,0.8-5.9,1.7-8.9,2.7c-1.9,0.7-3.2,2.5-3.2,4.6v44.9c0,2.7,2.2,4.9,4.9,4.9h61.2c2.7,0,4.9-2.2,4.9-4.9V47.7C85.5,45.6,84.2,43.8,82.3,43.1z M75.7,87.7H24.3V51.1c16.7-5.4,34.7-5.4,51.4,0V87.7z"/>
                      <path
                        d="M43.1,61.7c0,2.7,1.5,5,3.8,6.1l-2.7,10.1c-0.1,0.5,0,1.1,0.3,1.5s0.8,0.7,1.4,0.7h8.3c0.5,0,1-0.2,1.4-0.7s0.4-1,0.3-1.5l-2.7-10.1c2.2-1.1,3.8-3.4,3.8-6.1c0-3.8-3.1-6.9-6.9-6.9S43.1,57.9,43.1,61.7z"/>
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openResetPassword}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                      <path
                        d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-black bg-opacity-20 hover:bg-gray-500">
                  <td className="pl-4 text-black dark:text-white font-bold">
                    2
                  </td>
                  <td className="flex px-6 text-black font-bold dark:text-white py-4 whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 text-black font-bold dark:text-white whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openSetPermission}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100"
                      height="125"
                      viewBox="0 0 100 125">
                      <path
                        d="M82.3,43.1c-14.8-5.4-30.6-6.9-45.9-4.7V25.9c0-7.5,6.1-13.6,13.6-13.6s13.6,6.1,13.6,13.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C73.4,13,62.9,2.5,50,2.5C37.1,2.5,26.6,13,26.6,25.9v14.4c-3,0.8-5.9,1.7-8.9,2.7c-1.9,0.7-3.2,2.5-3.2,4.6v44.9c0,2.7,2.2,4.9,4.9,4.9h61.2c2.7,0,4.9-2.2,4.9-4.9V47.7C85.5,45.6,84.2,43.8,82.3,43.1z M75.7,87.7H24.3V51.1c16.7-5.4,34.7-5.4,51.4,0V87.7z"/>
                      <path
                        d="M43.1,61.7c0,2.7,1.5,5,3.8,6.1l-2.7,10.1c-0.1,0.5,0,1.1,0.3,1.5s0.8,0.7,1.4,0.7h8.3c0.5,0,1-0.2,1.4-0.7s0.4-1,0.3-1.5l-2.7-10.1c2.2-1.1,3.8-3.4,3.8-6.1c0-3.8-3.1-6.9-6.9-6.9S43.1,57.9,43.1,61.7z"/>
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openResetPassword}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                      <path
                        d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-black bg-opacity-20 hover:bg-gray-500">
                  <td className="pl-4 text-black dark:text-white font-bold">
                    3
                  </td>
                  <td className="flex px-6 text-black font-bold dark:text-white py-4 whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 text-black font-bold dark:text-white whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openSetPermission}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100"
                      height="125"
                      viewBox="0 0 100 125">
                      <path
                        d="M82.3,43.1c-14.8-5.4-30.6-6.9-45.9-4.7V25.9c0-7.5,6.1-13.6,13.6-13.6s13.6,6.1,13.6,13.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C73.4,13,62.9,2.5,50,2.5C37.1,2.5,26.6,13,26.6,25.9v14.4c-3,0.8-5.9,1.7-8.9,2.7c-1.9,0.7-3.2,2.5-3.2,4.6v44.9c0,2.7,2.2,4.9,4.9,4.9h61.2c2.7,0,4.9-2.2,4.9-4.9V47.7C85.5,45.6,84.2,43.8,82.3,43.1z M75.7,87.7H24.3V51.1c16.7-5.4,34.7-5.4,51.4,0V87.7z"/>
                      <path
                        d="M43.1,61.7c0,2.7,1.5,5,3.8,6.1l-2.7,10.1c-0.1,0.5,0,1.1,0.3,1.5s0.8,0.7,1.4,0.7h8.3c0.5,0,1-0.2,1.4-0.7s0.4-1,0.3-1.5l-2.7-10.1c2.2-1.1,3.8-3.4,3.8-6.1c0-3.8-3.1-6.9-6.9-6.9S43.1,57.9,43.1,61.7z"/>
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openResetPassword}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                      <path
                        d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-black bg-opacity-20 hover:bg-gray-500">
                  <td className="pl-4 text-black dark:text-white font-bold">
                    4
                  </td>
                  <td className="flex px-6 text-black font-bold dark:text-white py-4 whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 text-black font-bold dark:text-white whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openSetPermission}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100"
                      height="125"
                      viewBox="0 0 100 125">
                      <path
                        d="M82.3,43.1c-14.8-5.4-30.6-6.9-45.9-4.7V25.9c0-7.5,6.1-13.6,13.6-13.6s13.6,6.1,13.6,13.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C73.4,13,62.9,2.5,50,2.5C37.1,2.5,26.6,13,26.6,25.9v14.4c-3,0.8-5.9,1.7-8.9,2.7c-1.9,0.7-3.2,2.5-3.2,4.6v44.9c0,2.7,2.2,4.9,4.9,4.9h61.2c2.7,0,4.9-2.2,4.9-4.9V47.7C85.5,45.6,84.2,43.8,82.3,43.1z M75.7,87.7H24.3V51.1c16.7-5.4,34.7-5.4,51.4,0V87.7z"/>
                      <path
                        d="M43.1,61.7c0,2.7,1.5,5,3.8,6.1l-2.7,10.1c-0.1,0.5,0,1.1,0.3,1.5s0.8,0.7,1.4,0.7h8.3c0.5,0,1-0.2,1.4-0.7s0.4-1,0.3-1.5l-2.7-10.1c2.2-1.1,3.8-3.4,3.8-6.1c0-3.8-3.1-6.9-6.9-6.9S43.1,57.9,43.1,61.7z"/>
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openResetPassword}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                      <path
                        d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-black bg-opacity-20 hover:bg-gray-500">
                  <td className="pl-4 text-black dark:text-white font-bold">
                    5
                  </td>
                  <td className="flex px-6 text-black font-bold dark:text-white py-4 whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 text-black font-bold dark:text-white whitespace-nowrap">
                    Test
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openSetPermission}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="100"
                      height="125"
                      viewBox="0 0 100 125">
                      <path
                        d="M82.3,43.1c-14.8-5.4-30.6-6.9-45.9-4.7V25.9c0-7.5,6.1-13.6,13.6-13.6s13.6,6.1,13.6,13.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C73.4,13,62.9,2.5,50,2.5C37.1,2.5,26.6,13,26.6,25.9v14.4c-3,0.8-5.9,1.7-8.9,2.7c-1.9,0.7-3.2,2.5-3.2,4.6v44.9c0,2.7,2.2,4.9,4.9,4.9h61.2c2.7,0,4.9-2.2,4.9-4.9V47.7C85.5,45.6,84.2,43.8,82.3,43.1z M75.7,87.7H24.3V51.1c16.7-5.4,34.7-5.4,51.4,0V87.7z"/>
                      <path
                        d="M43.1,61.7c0,2.7,1.5,5,3.8,6.1l-2.7,10.1c-0.1,0.5,0,1.1,0.3,1.5s0.8,0.7,1.4,0.7h8.3c0.5,0,1-0.2,1.4-0.7s0.4-1,0.3-1.5l-2.7-10.1c2.2-1.1,3.8-3.4,3.8-6.1c0-3.8-3.1-6.9-6.9-6.9S43.1,57.9,43.1,61.7z"/>
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <svg
                      onClick={openResetPassword}
                      className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                      <path
                        d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                    </svg>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SetPermission
        openSetPermissionModal={openSetPermissionModal}
        closeSetPermission={closeSetPermission}/>
      <ResetPassword
        openResetPasswordModal={openResetPasswordModal}
        closeResetPassword={closeResetPassword}/>
    </main>

  );
};

export default UserTable;
