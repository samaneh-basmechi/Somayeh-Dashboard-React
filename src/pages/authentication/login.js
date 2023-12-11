import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {httpService} from '../../core/http-service';
import {Form, useNavigation, useActionData, useNavigate, useRouteError, redirect} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NOTIFY_CONFIG} from "../../shared/notif";

function Login() {

    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const isSuccessOperation = useActionData();
    const navigate = useNavigate();
    const routeErrors = useRouteError();

    const onSubmit = data => {
        httpService.post('/auth/session', data)
            .then(response => {
                    localStorage.setItem('sid', response?.data?.sid)
                    getPermissions();
                }
            ).catch(error => {
                const message = error?.message || t('message.apiError');
                toast.error(message, {
                    ...NOTIFY_CONFIG
                });
            }
        );
    };

    const getPermissions = (() => {
        httpService.get('/users/me/permissions')
            .then(response => {
                    if (response.data?.isActive) {
                        const message = t('message.changePassword');
                        toast.error(message, {
                            ...NOTIFY_CONFIG
                        });
                    }
                    localStorage.setItem('permissions', JSON.stringify(response.data));
                    userInformation();
                }
            ).catch(error => {
            const message = error?.message || t('message.getPermissionApiError');
            toast.error(message, {
                ...NOTIFY_CONFIG
            });
        });
    });

    const userInformation = (() => {
        httpService.get('/users/me')
            .then(response => {
                    localStorage.setItem('userInfo', JSON.stringify(response.data));
                    navigate('/dashboard');
                }
            ).catch(error => {
            const message = error?.message || t('message.getUserInfoApiError');
            toast.error(message, {
                ...NOTIFY_CONFIG
            });
        });
    });

    return (
        <>
            <ToastContainer/>
            <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg dark:bg-gray-900">

                <div className="text-center text-white mb-10">
                    <p className="text-2xl font-bold">{t('login.title')}</p>
                    <p className="font-black">{t('login.subTitle')}</p>
                </div>


                <Form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2">
                            {t('login.username')}
                        </label>
                        <input
                            {...register('username', {
                                required: t('login.usernameError')
                            })}
                            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.username && 'border border-solid border-[red]'}`}
                            placeholder="Username"/>
                        <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                            {errors.username?.message}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-normal mb-2">
                            {t('login.password')}
                        </label>
                        <input
                            {...register('password', {required: t('login.passwordError')})}
                            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.password && 'border border-solid border-[red]'}`}
                            type="password"
                            placeholder="Password"/>
                        <div className="text-[red] text-[10px] font-bold mt-1 h-[8px]">
                            {errors.password?.message}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block
            w-full bg-black mt-10
            text-white py-4 px-4
            rounded-md hover:bg-gradient-to-r
            from-indigo-500 via-purple-500
            to-pink-500 border border-white text-xl
            text-center dark:bg-gray-700 dark:border-gray-700">
                        {isSubmitting ? t('login.submitting') : t('login.login')}
                    </button>
                    {
                        isSuccessOperation && (
                            <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-1"
                                 role="alert">
                                <p>{t('login.successMessage')}</p>
                            </div>
                        )
                    }
                    {
                        routeErrors?.response?.data?.length > 0 && (
                            routeErrors.response.data.map((error) => {
                                return <p>{error.description}</p>;
                            })
                        )
                    }
                </Form>

                <div className="mt-2 flex justify-between gap-4">
                    <reactRouterDom.Link
                        to="/"
                        className="rounded-full
            text-white py-2 block font-black
            text-center">
                        {t('login.back')}
                    </reactRouterDom.Link>
                </div>

            </div>
        </>

    );
}

export default Login;