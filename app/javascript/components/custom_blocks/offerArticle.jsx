import React from 'react';

export default class OfferArticle extends React.Component {
  render() {
    return (
      <div className='relative w-[26rem] rounded-[22px] shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300'>
        <a
          className='after:content-[""] after:absolute after:w-full after:h-full'
          href='https://docs.google.com/forms/d/e/1FAIpQLSeo6kDuv1IvDsMpvCbssnQF8BMjeebYYyYaWjVE56w4knLJfQ/viewform'
        />
        <div className="flex flex-col py-8 px-7 text-center">
          <span className='xl:text-lg font-semibold mb-3.5'>Опубликуйте статью в&nbsp;блоге&nbsp;Callibri</span>
          <img className="w-44 h-48 mt-7 rounded-[23px] self-center" src="calendar.png" />
        </div>
      </div>
      
    )
  }
}
