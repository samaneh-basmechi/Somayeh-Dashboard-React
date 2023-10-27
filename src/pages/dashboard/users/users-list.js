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
    <main className="overflow-auto h-[calc(100vh_-_80px)] p-4 bg-black overflow-hidden">
      <div className="flex flex-col m-2">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <div className="flex justify-end mb-4">
                <Register />
              </div>
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
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
                <tbody className="bg-gray-800">
                  <tr className="bg-black bg-opacity-20 hover:bg-gray-700" >
                    <td className="pl-4 text-white">
                      1
                    </td>
                    <td className="flex px-6 text-white py-4 whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 text-white whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Permission} alt="" onClick={openSetPermission} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Key} alt="" onClick={openResetPassword} />
                    </td>
                  </tr>

                  <tr className="bg-black bg-opacity-20 hover:bg-gray-700">
                    <td className="pl-4 text-white">
                      1
                    </td>
                    <td className="flex px-6 text-white py-4 whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 text-white whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Permission} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Key} alt="" />
                    </td>
                  </tr>

                  <tr className="bg-black bg-opacity-20 hover:bg-gray-700">
                    <td className="pl-4 text-white">
                      1
                    </td>
                    <td className="flex px-6 text-white py-4 whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 text-white whitespace-nowrap">
                      Test
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Permission} alt="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img className="w-8 h-8 m-auto cursor-pointer" src={Key} alt="" />
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
        closeSetPermission={closeSetPermission} />
      <ResetPassword
        openResetPasswordModal={openResetPasswordModal}
        closeResetPassword={closeResetPassword} />
    </main>

  );
};

export default UserTable;
