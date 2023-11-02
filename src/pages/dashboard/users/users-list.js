import React, { useState, useEffect } from 'react';
import { httpService } from '../../../core/http-service.js';
import UpdatePermissions from './update-permissions.js';
import ResetPassword from './reset-password.js';
import Register from './registrer.js';
import { useTranslation } from 'react-i18next';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const {t} = useTranslation();
  const [userSelected, setUserSelected] = useState([]);

  const [openUpdatePermissionModal, setOpenUpdatePermissionModal] = useState(false);
  const openUpdatePermission = ( item ) => {setOpenUpdatePermissionModal(true);};
  const closeUpdatePermission = () => {setOpenUpdatePermissionModal(false);};

  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(false);
  const openResetPassword = () => {setOpenResetPasswordModal(true);};
  const closeResetPassword = () => {setOpenResetPasswordModal(false);};

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const fakeData = [
      {
        'id': 2,
        'firstName': 'samaneh',
        'lastName': 'bsm',
        'username': 'samaneh_bsm',
        'email': 'samaneh@gmail.com',
        'password': 'MDNhYzY3NDIxNmYzZTE1Yzc2MWVlMWE1ZTI1NWYwNjc5NTM2MjNjOGIzODhiNDQ1OWUxM2Y5NzhkN2M4NDZmNA==',
        'isAdmin': false,
        'f1Access': true,
        'f2Access': false,
        'f3Access': false,
        'f4Access': false,
        'isActive': false,
        'activatedAt': null,
        'createdAt': '2023-10-28T16:55:19.000Z'
      }
    ];
    setUsers(fakeData);

    httpService.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <main className="overflow-auto h-[calc(100vh_-_80px)] p-4 bg-white dark:bg-black overflow-hidden">
      <div className="flex flex-col m-2">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="dark:shadow overflow-hidden sm:rounded-lg">
              <div className="flex justify-end mb-4">
                <Register getUser={getUser}/>
              </div>
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200
                      bg-gray-100 dark:border-gray-700 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700
                      uppercase tracking-wider"></th>
                    <th className="px-5 py-3 border-b-2 border-gray-200
                      bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white text-left text-xs font-semibold text-gray-700
                      uppercase tracking-wider">
                      {t('dashboard.user.table.name')}
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200
                      bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white text-left text-xs font-semibold text-gray-700
                      uppercase tracking-wider">
                      {t('dashboard.user.table.email')}
                    </th>
                    <th className="text-center px-5 py-3 border-b-2
                      border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white text-left text-xs font-semibold
                      text-gray-700 uppercase tracking-wider">
                      {t('dashboard.user.table.permissions')}
                    </th>
                    <th className="text-center px-5 py-3 border-b-2
                      border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white text-left text-xs font-semibold
                      text-gray-700 uppercase tracking-wider">
                      {t('dashboard.user.table.resetPassword')}
                    </th>
                  </tr>
                  </thead>
                  <tbody>

                  {users.map(( item, index ) => (
                    <tr key={index} className="dark:bg-gray-800 dark:text-white bg-white">
                      <td className="font-bold px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                        {index + 1}
                      </td>
                      <td className="font-bold px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                        {item.firstName + ' ' + item.lastName}
                      </td>
                      <td className="font-bold px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                        {item.email}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                        <svg
                          onClick={() => {
                            openUpdatePermission();
                            setUserSelected(item);
                          }}
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
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                        <svg
                          onClick={() => {
                            openResetPassword();
                            setUserSelected(item);
                          }}
                          className="w-8 h-8 m-auto cursor-pointer fill-black dark:fill-white"
                          xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                          <path
                            d="M85.03,57.12c-1.27,0-2.53,.49-3.49,1.45l-7.4,7.4-2.63-2.63,3.59-3.6c.93-.93,1.45-2.18,1.45-3.49s-.51-2.58-1.44-3.51c-.93-.93-2.18-1.42-3.5-1.45-1.33,.01-2.57,.53-3.5,1.46l-6.2,6.2-16.01-16.02c4.32-7.45,3.1-17.11-3.05-23.25-7.5-7.5-19.71-7.5-27.21,0-7.5,7.5-7.5,19.71,0,27.21,6.14,6.14,15.8,7.36,23.26,3.05l34.6,34.6c.93,.93,2.18,1.45,3.49,1.45s2.57-.52,3.5-1.45c.93-.94,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.5l-1.94-1.94,10.01-10c.93-.93,1.45-2.18,1.45-3.5s-.52-2.56-1.45-3.49-2.25-1.46-3.52-1.46Z"/>
                        </svg>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdatePermissions
        userData={userSelected}
        getUser={getUser}
        openUpdatePermissionModal={openUpdatePermissionModal}
        closeUpdatePermission={closeUpdatePermission}/>
      <ResetPassword
        userData={userSelected}
        openResetPasswordModal={openResetPasswordModal}
        closeResetPassword={closeResetPassword}/>
    </main>

  );
};

export default UserTable;
