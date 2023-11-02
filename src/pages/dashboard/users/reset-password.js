import React  from 'react';
import Modal from 'react-modal';
import CUSTOM_STYLE from './modal-style';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { httpService } from '../../../core/http-service';
import { Form, useNavigation, useRouteError } from 'react-router-dom';

function ResetPassword ( props ) {
  const {t} = useTranslation();
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const routeErrors = useRouteError();

  const onSubmit = ( data ) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    httpService.patch(`/users/${props.userData.id}/reset-password`, data, config)
      .finally(() => reset())
      .then(response => {
          console.log(response.data);
          props.getUser();
          props.closeResetPassword();
        }
      ).catch(error => console.error(error));
  };

  return (
    <Modal
      isOpen={props.openResetPasswordModal}
      onRequestClose={() => {
        reset();
        props.closeResetPassword();
      }}
      style={CUSTOM_STYLE}
      contentLabel="Example Modal">
      <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 p-2 rounded-lg">
        <h2 className="text-white text-2xl">
          {t('dashboard.user.resetPassword.title')}
        </h2>
        <div className="w-[250px] mt-6 mb-6">
          <label htmlFor="new-password"
                 className="block mb-2 text-sm font-medium text-white">
            {t('dashboard.user.resetPassword.label')}
          </label>
          <input
            {...register('password', {
              required: t('dashboard.user.resetPassword.error')
            })}
            type="password" id="new-password"
            className="bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
            placeholder={t('dashboard.user.resetPassword.placeholder')}/>
          <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
            {errors.password?.message}
          </div>
        </div>
        <button
          type="submit"
          className="block
                    bg-black
                    w-full
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
          {isSubmitting ? t('dashboard.user.register.modal.submitting') : t('dashboard.user.resetPassword.submit')}
        </button>
        {
          routeErrors?.response?.data?.length > 0 && (
            routeErrors.response.data.map(( error ) => {
              return <p>{error.description}</p>;
            })
          )
        }
      </Form>
    </Modal>
  );
}

export default ResetPassword;
