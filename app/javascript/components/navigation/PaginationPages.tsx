import React from 'react';
import PageNumber from './PageNumber';

const PaginationPages = () => {
  return (
    <div className='flex flex-row justify-between'>
      <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>В начало</a>
      <div className='flex flex-row justify-between w-96'>
        <PageNumber
          number={1}
        />
        <PageNumber
          number={2}
        />
        <PageNumber
          number={3}
        />
        <PageNumber
          number={4}
        />
        <PageNumber
          number={5}
        />
      </div>
      <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>Вперед</a> 
    </div>
  )
}

export default PaginationPages;
