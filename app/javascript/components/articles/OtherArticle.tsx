import React from "react";
import Tag from "../navigation/tags/Tag";
import Statistic from "../statistics/Statistic";
import classNames from "classnames";

const OtherArticle = () => {
  const styles = classNames(
    `flex flex-col relative rounded-3xl shadow-previeArticle hover:shadow-hoverPrevieArticle cursor-pointer transition duration-300`
  );
  return (
    <div className={styles}>
      {
        <Tag
          text="Новое"
          url="/news"
          type="news"
          customStyles="absolute top-3 left-3 lg:top-3 lg:left-3 bg-tag-news"
        />
      }
      <img className="rounded-3xl" src="cover.png" />
      <div className="flex flex-col justify-between py-6 px-4">
        <h2 className="text-lg md:text-base xl:text-lg font-medium mb-4">
          Улучшить результаты другого подрядчика и получить 200+ лидов в кризис?
          Кейс Титансофт о продвижении застройщика
        </h2>
        <Statistic like={20} comments={5} date="21.03.2023" />
      </div>
    </div>
  );
};

export default OtherArticle;
