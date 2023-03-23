import React from 'react';
import Button from '../ui/button';

const OfferArticle = () => {
  return (
    <div className='relative h-min rounded-3xl shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300'>
      <a
        className='after:content-[""] after:absolute after:w-full after:h-full'
        href='https://docs.google.com/forms/d/e/1FAIpQLSeo6kDuv1IvDsMpvCbssnQF8BMjeebYYyYaWjVE56w4knLJfQ/viewform'
      />
      <div className="flex flex-col py-8 px-7 text-center">
        <span className='text-lg font-semibold lg:text-xl'>Опубликуйте статью в&nbsp;блоге&nbsp;Callibri</span>
        <img className="my-6 w-32 h-28 xl:h-36 xl:w-40 self-center rounded-3xl" src="article-publish.png" />
        <Button
          children = "Предложить статью"
          customStyles = "p-3 text-base font-semibold xl:p-4 xl:text-lg"
        />
      </div>
    </div>
    
  )
}

export default OfferArticle;
