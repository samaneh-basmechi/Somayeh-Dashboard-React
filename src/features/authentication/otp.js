import { useForm } from 'react-hook-form';

export default function Otp () {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">

      <div className="text-center text-white mb-10">
        <p className="font-black">
          We sent an email to *@gmail.com with a code, please enter the code.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-6">
          <label className="block text-white text-sm font-normal mb-2">
            Code
          </label>
          <input
            {...register('otpCode', {required: 'Please enter the code that sent to your email.'})}
            className={`w-full px-3 py-2 
            rounded-md border border-gray-300 
            focus:outline-none focus:border-violet-500 
            ${errors.otpCode && 'border border-solid border-[red]'}`}
            placeholder="Code"/>
          {
            errors.otpCode && errors.otpCode?.type === 'required' && (
              <p className="text-[red] text-[10px] font-bold mt-1">
                {errors.otpCode?.message}
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
            text-center">Verify
        </button>

      </form>

    </div>
  );
}
