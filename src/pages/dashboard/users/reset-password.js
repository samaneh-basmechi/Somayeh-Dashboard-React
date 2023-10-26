import React from 'react';
import { useForm } from 'react-hook-form';

export default function ResetPassword () {
  const {register, watch, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">

      <div className="text-center text-white mb-10">
        <p className="font-black">Please Enter Your New Password</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-6">
          <label className="block text-white text-sm font-normal mb-2">
            Password
          </label>
          <input
            {...register('password', {required: 'Please enter your password.'})}
            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.password && 'border border-solid border-[red]'}`}
            type="password"
            placeholder="Password"/>
          {
            errors.password && errors.password?.type === 'required' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.password?.message}
              </p>
            )
          }
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-normal mb-2">
            Confirm New Password
          </label>
          <input
            {...register('confirmPassword', {
              required: 'Please enter your password.',
              validate: value => {
                if(watch('password') !== value){
                  return 'Password and confirm password dose not match!'
                }
              }
            })}
            className={`
            w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.confirmPassword && 'border border-solid border-[red]'}`}
            type="password"
            placeholder="Confirm New Password"/>
          {
            errors.confirmPassword && errors.confirmPassword?.type === 'required' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.confirmPassword?.message}
              </p>
            )
          }
          {
            errors.confirmPassword && errors.confirmPassword?.type === 'validate' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.confirmPassword?.message}
              </p>
            )
          }
        </div>

        <button
          className="block
            w-full bg-black
            text-white py-4 px-4
            rounded-md hover:bg-gradient-to-r
            from-indigo-500 via-purple-500
            to-pink-500 border border-white text-xl
            text-center">Set New Password
        </button>

      </form>

    </div>
  );
}
