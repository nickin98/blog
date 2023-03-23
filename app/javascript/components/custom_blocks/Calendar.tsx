import React from 'react';

const Calendar = () => {
  return (
    <div className='relative h-min rounded-3xl shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300'>
      <a
        className='after:content-[""] after:absolute after:w-full after:h-full'
        href='https://callibri.ru/calendar'
      />
      <div className="flex flex-col py-3.5 px-5 text-center">
        <span className='text-lg font-semibold mb-3 lg:text-xl'>Календарь маркетолога</span>
        <span className='text-base font-medium xl:text-lg'>Вебинары о&nbsp;продвижении бизнеса&nbsp;в&nbsp;интернете</span>
        <img className="my-6 w-36 h-44 xl:h-full xl:w-48 self-center rounded-3xl" src="calendar.png" />
      </div>
    </div>
    
  )
}

export default Calendar;
