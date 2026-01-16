import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

function Forms({ handleFormSubmitData }) {

  const { register, handleSubmit } = useForm();

  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(data => handleFormSubmitData(data))}>
        <input {...register("name")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
        <input {...register("email")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Email' />
        <input {...register("imageUrl")} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image URL' />
        <button className='bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors'>Submit</button>
      </form>
    </div>
  )

}


export default Forms