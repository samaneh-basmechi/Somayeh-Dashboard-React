import React, { useEffect } from 'react';
import * as reactRouterDom from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { httpService } from '../../core/http-service';
import { Form, useSubmit, useNavigation, useActionData, useNavigate, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitForm = useSubmit();
  const onSubmit = data => {
    submitForm(data, { method: 'post' });
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const isSuccessOperation = useActionData();
  const navigate = useNavigate();
  const routeErrors = useRouteError();

  useEffect(() => {
    if (isSuccessOperation) {
      setTimeout(() => {
        navigate('/admin-panel');
      }, 2000);
    }
  });

  return (


    <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">

      <div className="text-center text-white mb-10">
        <p className="text-2xl font-bold">Welcome!</p>
        <p className="font-black">Sign In to your account</p>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-6">
          <label className="block text-white text-sm font-normal mb-2">
            Username
          </label>
          <input
            {...register('username', {
              required: 'Please enter your username.'
            })}
            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.username && 'border border-solid border-[red]'}`}
            placeholder="Username" />
          {
            errors.username && errors.username?.type === 'required' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.username?.message}
              </p>
            )
          }
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-normal mb-2">
            Password
          </label>
          <input
            {...register('password', { required: 'Please enter your password.' })}
            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.password && 'border border-solid border-[red]'}`}
            type="password"
            placeholder="Password" />
          {
            errors.password && errors.password?.type === 'required' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.password?.message}
              </p>
            )
          }
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="block
            w-full bg-black
            text-white py-4 px-4
            rounded-md hover:bg-gradient-to-r
            from-indigo-500 via-purple-500
            to-pink-500 border border-white text-xl
            text-center">
          {t('login.login')}
          {/* {isSubmitting ? 'Submitting' : 'Login'} */}
        </button>

        {
          isSuccessOperation && (
            <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-1" role="alert">
              <p>Login operation is successfully completed and will be transferred to the login page.</p>
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

      <div className="mt-4 flex justify-between gap-4">
        <reactRouterDom.Link
          to="/landing"
          className="rounded-full
            text-white py-2 block font-black
            text-center">Back to Home
        </reactRouterDom.Link>

        <reactRouterDom.Link
          to="/otp"
          className="rounded-full
            text-white py-2 block font-black
            text-center">
          Forget Password?
        </reactRouterDom.Link>
      </div>

    </div>
  );
}

export default Login;

export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post('/auth/session', data);
  return response.status === 200;
}
