import React from "react";
import { Tag } from "../navigation/tags/Tag";
import { Statistic } from "./statistic";

const FirstArticle = () => {
  return (
    <div className="flex relative rounded-[22px] mt-12 p-6 shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300">
      {
        <Tag
          key="1"
          name="Новое"
          url="/news"
          styles="absolute top-2 left-2 bg-tag-news hover:bg-tag-hover-news"
        >
          "Новое"
        </Tag>
      }
      <img className="w-[38rem] rounded-[23px]" src="cover.png" />
      <div className="flex flex-col justify-between mt-4 ml-8">
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-semibold	">Лид-форма Вконтакте: руководство по созданию и настройке</h2>
        <Statistic/>
      </div>
    </div>
  )
}

export {FirstArticle}
