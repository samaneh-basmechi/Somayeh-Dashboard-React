import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { httpService } from '../../../core/http-service';

const UserInformation = () => {
  const {t} = useTranslation();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        access_token: token,
      },
    };
    httpService.get('/users/me' , config)
      .then(response => {
        setUserInfo(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="px-6">
      <h3 className="text-black dark:text-white text-2xl text-center mb-4 font-bold">{userInfo.username}</h3>
      <p className="text-black dark:text-white mb-4"><span className="font-bold mr-2">
        {t('dashboard.profile.email')}
      </span> {userInfo.email}</p>
      <p className="text-black dark:text-white mb-4"><span className="font-bold mr-2">
        {t('dashboard.profile.permissions')}
      </span>

        {userInfo.f1Access && (
          <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">
          {t('dashboard.profile.access.f1')}
          </span> )}

        {userInfo.f2Access && (
          <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">
                      {t('dashboard.profile.access.f2')}
          </span> )}

        {userInfo.f3Access && (
          <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">
                      {t('dashboard.profile.access.f3')}
          </span> )}

        {userInfo.f4Access && (
          <span className="inline-flex items-center
                        rounded-md bg-green-50 px-2 py-1 text-xs 
                        text-green-700 ring-1 ring-inset 
                        ring-green-600/20 mr-2 font-bold">
                      {t('dashboard.profile.access.f4')}
          </span> )}

      </p>
    </div>
  );
};

export default UserInformation;

