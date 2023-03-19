import React from "react";
import Tag from "./Tag";

const TagsList = () => {
  return (
    <div className="flex justify-evenly bg-gray rounded-[23px] lg:py-8 md:py-2">
      <Tag
        text='Новое'
        url='/news'
        type='news'
      />
      <Tag
        text='Кейс'
        url='/case'
        type='case'
      />
      <Tag
        text='Продажи'
        url='/sales'
        type='sales'
      />
      <Tag
        text='Лидогенерация'
        url='/lead_generation'
        type='leadGeneration'
      />
      <Tag
        text='Агенствам'
        url='/agencies'
        type='agencies'
      />
      <Tag
        text='На своем месте'
        url='/in_my_place'
        type='inMyPlace'
      />
    </div>
  )
}

export default TagsList;
