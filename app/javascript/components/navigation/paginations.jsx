import React from 'react';
import classNames from 'classnames';

export default class Paginations extends React.Component {
  render() {
    const page = classNames(
      `font-semibold text-center`,
      'xl:w-16 xl:h-16 lg:w-16 lg:h-16 md:w-12 md:h-12',
      'xl:text-lg xl:leading-[4rem] md:leading-[3rem] ',
      'shadow-previeArticle hover:shadow-hoverPrevieArticle rounded-full cursor-pointer transition duration-300'
    )
    return (
      <div className='flex flex-row justify-between'>
        <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>В начало</a>
        <div className='flex flex-row justify-between w-96'>
          <a className={page}>1</a>
          <a className={page}>2</a>
          <a className={page}>3</a>
          <a className={page}>4</a>
          <a className={page}>5</a>
        </div>
        <a className='w-72 xl:text-lg xl:leading-[4rem] font-semibold shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300'>Вперед</a> 
      </div>
    )
  }
}
