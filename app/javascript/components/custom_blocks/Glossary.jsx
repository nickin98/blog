import React from 'react';

export default class Glossary extends React.Component {
  render() {
    return (
      <div className='relative w-[26rem] rounded-[22px] shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300'>
        <a
          className='after:content-[""] after:absolute after:w-full after:h-full'
          href='https://callibri.ru/glossary'
        />
        <div className="flex flex-col py-8 px-7 text-center">
          <span className='xl:text-lg font-semibold mb-3.5'>Словарь маркетолога</span>
          <span className='xl:text-lg font-medium'>400+ терминов маркетинга понятным языком</span>
          <img className="w-44 h-48 mt-7 rounded-[23px] self-center" src="glossary.png" />
        </div>
      </div>
      
    )
  }
}
