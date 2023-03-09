import React from "react";
import { Tag } from "./Tag";

const TagsList = () => {
  return (
    <div className="flex justify-evenly bg-gray rounded-[23px] py-8">
      {tags.map((tag) =>
        <Tag
          key={tag.id}
          name={tag.name}
          url={tag.url}
          styles={tag.styles}
        />
      )}
    </div>
  )
}

const tags = [
  { id: 1, name: 'Новое',          url: '/news',            styles: 'bg-tag-news hover:bg-tag-hover-news'},
  { id: 2, name: 'Кейс',           url: '/case',            styles: 'bg-tag-case hover:bg-tag-hover-case'},
  { id: 3, name: 'Продажи',        url: '/sales',           styles: 'bg-tag-sales hover:bg-tag-hover-sales'},
  { id: 4, name: 'Лидогенерация',  url: '/lead_generation', styles: 'bg-tag-leadGeneration hover:bg-tag-hover-leadGeneration'},
  { id: 5, name: 'Агенствам',      url: '/agencies',        styles: 'bg-tag-agencies hover:bg-tag-hover-agencies'},
  { id: 6, name: 'На своем месте', url: '/in_my_place',     styles: 'bg-tag-inMyPlace hover:bg-tag-hover-inMyPlace'}
];

export {TagsList}
