import React from "react";
import Tag from "../navigation/tags/Tag";
import { Statistic } from "./statistic";
import classNames from "classnames";

const FirstArticle = () => {
  const styles = classNames(
    `flex flex-col relative mt-6 xl:mt-12 shadow-previeArticle hover:shadow-hoverPrevieArticle rounded-3xl cursor-pointer transition duration-300`,
    `md:flex-row lg:p-5 xl:p-6`
  );
  return (
    <div className={styles}>
      <Tag
        text="Новое"
        url="/news"
        type="absoluteNews"
      />
      <img className="w-[38rem] md:w-[23rem] lg:w-[30rem] xl:w-[38rem] rounded-3xl" src="cover.png" />
      <div className="flex flex-col justify-between py-6 px-4 lg:px-4 lg:pt-2 lg:pb-0 xl:pl-8 xl:pt-4">
        <h2 className="text-lg font-medium sm:text-2xl lg:text-xl xl:text-3xl sm:font-semibold mb-4">Лид-форма Вконтакте: руководство по созданию и настройке</h2>
        <Statistic/>
      </div>
    </div>
  )
}

export default FirstArticle
