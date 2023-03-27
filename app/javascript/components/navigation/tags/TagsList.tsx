import React from "react";
import Tag from "./Tag";
import { ReactSVG } from "react-svg";

const TagsList = () => {
  return (
    <div className="bg-gray rounded-3xl overflow-hidden py-4 lg:py-5 xl:py-8 lg relative">
      <ReactSVG
        src="tag_list/arrow.svg"
        className="absolute left-3 -translate-y-1/2 top-1/2 lg:hidden"
      />
      <div className="flex space-x-4 overflow-x-auto mx-9 lg:mx-0 lg:justify-center">
        <Tag text="Новое" url="/news" type="news" />
        <Tag text="Кейс" url="/case" type="case" />
        <Tag text="Продажи" url="/sales" type="sales" />
        <Tag
          text="Лидогенерация"
          url="/lead_generation"
          type="leadGeneration"
        />
        <Tag text="Агенствам" url="/agencies" type="agencies" />
        <Tag text="На своем месте" url="/in_my_place" type="inMyPlace" />
      </div>
      <ReactSVG
        src="tag_list/arrow.svg"
        className="absolute right-3 -translate-y-1/2 top-1/2 rotate-180 lg:hidden"
      />
    </div>
  );
};

export default TagsList;
