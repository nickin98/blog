import React from "react";
import Tag from "../navigation/tags/Tag";
import { Statistic } from "./statistic";

const OtherArticle = () => {
  return (
    <div className="flex flex-col w-[26rem] relative rounded-[22px] shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300">
      {
        <Tag
          text="Новое"
          url="/news"
          type="absoluteNews"
        />
      }
      <img className="w-[38rem] rounded-[23px] h-48" src="cover.png" />
      <div className="flex flex-col justify-between pt-6 px-4 pb-[22px]">
        <h2 className="text-lg font-medium">
          Улучшить результаты другого подрядчика и получить 200+ лидов в кризис? Кейс Титансофт о продвижении застройщика
        </h2>
        <div className="mt-4"/>
        <Statistic/>
      </div>
    </div>
  )
}

export {OtherArticle}
