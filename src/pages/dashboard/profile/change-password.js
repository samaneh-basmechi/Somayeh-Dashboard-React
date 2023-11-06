import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { httpService } from '../../../core/http-service';
import { Form, redirect, useNavigation, useRouteError } from 'react-router-dom';

const ChangePassword = () => {
  const {t} = useTranslation();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = ( data ) => {
    delete data[ 'confirmPassword' ];
    console.log(data);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        access_token: token,
      },
    };
    httpService.patch('/users/me/change-password', data, config)
      .then(response => {
          console.log(response.data);
          redirect('/login');
        }
      ).catch(error => console.error(error));
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const routeErrors = useRouteError();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}
          className="bg-white border-[black] border border-solid dark:bg-gray-900 p-6 rounded">
      <h2 className="text-black dark:text-white text-xl font-bold">
        {t ('dashboard.profile.changePasswordTitle')}
      </h2>
      <div className="mt-6 mb-2 flex gap-2 w-full flex-wrap">
        <div className="w-[300px]">
          <label htmlFor="old-password"
                 className="block mb-2 text-sm font-medium text-black dark:text-white">
            {t('dashboard.profile.oldPassword.label')}
          </label>
          <input
            {...register('oldPassword', {
              required: t('dashboard.profile.oldPassword.error')
            })}
            type="text" id="old-password"
            className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
            placeholder={t('dashboard.profile.oldPassword.placeholder')}/>
          <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
            {errors.oldPassword?.message}
          </div>
        </div>
        <div className="w-[300px]">
          <label htmlFor="new-password"
                 className="block mb-2 text-sm font-medium text-black dark:text-white">
            {t('dashboard.profile.newPassword.label')}
          </label>
          <input
            {...register('newPassword', {
              required: t('dashboard.profile.newPassword.error')
            })}
            type="text" id="new-password"
            className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
            placeholder={t('dashboard.profile.newPassword.placeholder')}/>
          <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
            {errors.newPassword?.message}
          </div>
        </div>
        <div className="w-[300px]">
          <label htmlFor="new-password"
                 className="block mb-2 text-sm font-medium text-black dark:text-white">
            {t('dashboard.profile.confirmNewPassword.label')}
          </label>
          <input
            {...register('confirmNewPassword', {
              required: t('dashboard.profile.confirmNewPassword.error')
            })}
            type="text" id="new-password"
            className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
            placeholder={t('dashboard.profile.confirmNewPassword.placeholder')}/>
          <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
            {errors.confirmNewPassword?.message}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="block mt-4
                    text-white bg-black
                    dark:bg-black  py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
        {isSubmitting ? t('dashboard.user.register.modal.submitting') : t('dashboard.profile.submit')}
      </button>
      {
        routeErrors?.response?.data?.length > 0 && (
          routeErrors.response.data.map(( error ) => {
            return <p>{error.description}</p>;
          })
        )
      }
    </Form>
  );
};

export default ChangePassword;

