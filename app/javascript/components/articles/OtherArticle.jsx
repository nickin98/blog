import React from "react";
import { Tag } from "../navigation/tags/Tag";
import { Statistic } from "./statistic";

const OtherArticle = () => {
  return (
    <div className="flex flex-col w-[26rem] relative rounded-[22px] shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300">
      {
        <Tag
          key="1"
          name="Новое"
          url="/news"
          styles="absolute top-3 left-3 bg-tag-news"
        >
          "Новое"
        </Tag>
      }
      <img className="w-[38rem] rounded-[23px]" src="cover.png" />
      <div className="flex flex-col justify-between mt-4 ml-8">
        <h2 className="text-lg font-medium">
          Улучшить результаты другого подрядчика и получить 200+ лидов в кризис? Кейс Титансофт о продвижении застройщика
        </h2>
        <Statistic/>
      </div>
    </div>
  )
}

export {OtherArticle}
