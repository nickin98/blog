import React from 'react';
import axios from 'axios';
import Button from '../ui/button';

const SubscribeEmail = () => {
  return (
    <div className='bg-gray p-4 lg:py-6 lg:px-8 xl:p8 rounded-3xl col-span-full'>
      <form className='flex flex-col lg:flex-row'>
        <label className='flex flex-col text-base font-semibold text-center mb-2 lg:flex-row lg:mb-0 lg:items-center lg:w-3/4 xl:text-xl'>
          Получайте&nbsp;статьи&nbsp;на&nbsp;почту!
          <input
            className='rounded-full mt-4 px-6 py-3 lg:mt-0 lg:ml-8 lg:w-full xl:text-lg xl:px-6 border border-lightGray hover:shadow-lightGray transition duration-300'
            type="text"
            name="email"
            placeholder="Введите свой email"
          />
        </label>
        <Button
          children = "Подписаться"
          customStyles = "p-3 text-base font-semibold lg:lg:w-1/4 lg:ml-4 xl:text-lg"
        />
      </form>
    </div>
  )
}

export default SubscribeEmail;
