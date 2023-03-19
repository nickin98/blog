import React from 'react';
import NumberPages from './numberPages';

export default class Paginations extends React.Component {
  render() {
    return (
      <div className='flex flex-row justify-between'>
        <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>В начало</a>
        <div className='flex flex-row justify-between w-96'>
          <NumberPages/>
          <NumberPages/>
          <NumberPages/>
          <NumberPages/>
          <NumberPages/>
        </div>
        <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>Вперед</a> 
      </div>
    )
  }
}
