import React from "react";
import { Tag } from "./navigation/tags/Tag";

export default () => (
  <div className="bg-red-500">
    <Tag url="/news" name="Новое"/>
    <Tag url="/case" name="Кейс"/>
    <Tag url="/sales" name="Продажи"/>
    <Tag url="/lead_generation" name="Лидогенерация"/>
    <Tag url="/agencies" name="Агенствам"/>
    <Tag url="/in_my_place" name="На своем месте"/>
  </div>
);
