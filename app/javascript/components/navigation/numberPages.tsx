import React from 'react';
import classNames from 'classnames';

function styles() {
  return (
    classNames(
      `font-semibold text-center`,
      'xl:w-16 xl:h-16 lg:w-16 lg:h-16 md:w-12 md:h-12',
      'xl:text-lg xl:leading-[4rem] lg:leading-[4rem] ',
      'shadow-previeArticle hover:shadow-hoverPrevieArticle rounded-full cursor-pointer transition duration-300'
    )
  )
}

function NumberPages() {
  return (
    <a className={styles()}>1</a>
  )
}

export default NumberPages;