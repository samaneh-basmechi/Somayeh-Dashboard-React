import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Form, useNavigation, useRouteError } from 'react-router-dom';
import { httpService } from '../../../core/http-service';
import CUSTOM_STYLE from './modal-style';

const Register = ( props ) => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const {t} = useTranslation();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = ( data ) => {
    delete data[ 'confirmPassword' ];
    const payload = Object.assign({isAdmin: false} , data);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        access_token: token,
      },
    };
    httpService.post('/users', payload, config)
      .then(response => {
          props.getUser();
          closeRegister();
        }
      ).catch(error => console.error(error));
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const routeErrors = useRouteError();

  const openRegister = () => {
    setOpenRegisterModal(true);
  };
  const closeRegister = () => {
    setOpenRegisterModal(false);
  };

  const [items, setItems] = useState([
    {name: 'f1Access', text: 'Dev', checked: false},
    {name: 'f2Access', text: 'Int', checked: false},
    // {name: 'f3Access', text: 'Prod', checked: false},
  ]);

  const handleCheckboxChange = ( itemName ) => {
    setItems(( prevItems ) =>
      prevItems.map(( item ) =>
        item.name === itemName ? {...item, checked: !item.checked} : item
      )
    );
  };

  return (
    <>
      <button
        onClick={openRegister}
        type="button"
        className="block
                    text-white bg-black
                    dark:bg-black  py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
        +
        {t('dashboard.user.register.button')}
      </button>
      <Modal
        isOpen={openRegisterModal}
        onRequestClose={closeRegister}
        style={CUSTOM_STYLE}
        contentLabel="Example Modal">
        <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 p-2 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            {t('dashboard.user.register.modal.title')}
          </h2>
          <div className="flex gap-4 mt-4 mb-4">

            <div className="flex-grow">
              <label htmlFor="FirstName"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.firstName.label')}
              </label>
              <input
                {...register('firstName', {
                  required: t('dashboard.user.register.modal.firstName.error')
                })}
                type="text" id="FirstName"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500
                           ${errors.firstName && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.firstName.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.firstName?.message}
              </div>
            </div>

            <div className="flex-grow">
              <label htmlFor="LastName"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.lastName.label')}
              </label>
              <input
                {...register('lastName', {
                  required: t('dashboard.user.register.modal.lastName.error')
                })}
                type="text" id="LastName"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 
                           ${errors.lastName && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.lastName.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.lastName?.message}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-grow">
              <label htmlFor="Username"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.userName.label')}
              </label>
              <input
                {...register('username', {
                  required: t('dashboard.user.register.modal.userName.error')
                })}
                type="text" id="Username"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 
                           ${errors.username && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.userName.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.username?.message}
              </div>
            </div>
            <div className="flex-grow">
              <label htmlFor="Email"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.email.label')}
              </label>
              <input
                {...register('email', {
                  required: t('dashboard.user.register.modal.email.error')
                })}
                type="text" id="Email"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 
                           ${errors.email && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.email.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.email?.message}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-grow">
              <label htmlFor="Password"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.password.label')}
              </label>
              <input
                {...register('password', {
                  required: t('dashboard.user.register.modal.password.error')
                })}
                type="password" id="Password"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 
                           ${errors.password && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.password.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.password?.message}
              </div>
            </div>
            <div className="flex-grow">
              <label htmlFor="Confirm-Password"
                     className="block mb-2 text-sm font-medium text-white">
                {t('dashboard.user.register.modal.confirmPassword.label')}
              </label>
              <input
                {...register('confirmPassword', {
                  required: t('dashboard.user.register.modal.confirmPassword.error')
                })}
                type="password" id="Confirm-Password"
                className={`bg-gray-50 border border-gray-300 text-gray-900
                          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 
                           ${errors.confirmPassword && 'border border-solid border-[red]'}`}
                placeholder={t('dashboard.user.register.modal.confirmPassword.placeholder')}/>
              <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                {errors.confirmPassword?.message}
              </div>
            </div>
          </div>
          <hr/>
          <p className="mt-2 text-white text-md font-bold">Permissions</p>
          <ul className="mt-2 mb-6">
            {items.map(( item ) => (
              <li
                key={item.name}
                className="flex items-center mb-2 text-white">
                <input
                  {...register(item.name)}
                  type="checkbox"
                  id={`item-${item.name}`}
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.name)}
                  className="mr-2 text-blue-400"/>
                <label
                  htmlFor={`item-${item.name}`}>
                  {item.text}
                </label>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            disabled={isSubmitting}
            className="block
                    bg-black
                    w-full
                    text-white py-2 px-2
                    rounded-md hover:bg-gradient-to-r
                    from-indigo-500 via-purple-500
                    to-pink-500 border border-white
                    text-center">
            {isSubmitting ? t('dashboard.user.register.modal.submitting') : t('dashboard.user.register.modal.submit')}
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
    </>
  );
};

export default Register;
