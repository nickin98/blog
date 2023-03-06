import React from "react";
import { Tag } from "./Tag";

const TagsList = () => {
  return (
    <div className="flex justify-evenly bg-gray py-8">
      {tags.map((tag) =>
        <Tag
          key={tag.id}
          name={tag.name}
          url={tag.url}
          bgColor={tag.bgColor}
        />
      )}
    </div>
  )
}

const tags = [
  { id: 1, name: 'Новое',          url: '/news',            bgColor: 'bg-tag-news'},
  { id: 2, name: 'Кейс',           url: '/case',            bgColor: 'bg-tag-case'},
  { id: 3, name: 'Продажи',        url: '/sales',           bgColor: 'bg-tag-sales'},
  { id: 4, name: 'Лидогенерация',  url: '/lead_generation', bgColor: 'bg-tag-leadGeneration'},
  { id: 5, name: 'Агенствам',      url: '/agencies',        bgColor: 'bg-tag-agencies'},
  { id: 6, name: 'На своем месте', url: '/in_my_place',     bgColor: 'bg-tag-inMyPlace'}
];

export {TagsList}
