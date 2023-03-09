import React from "react";
import { TagsList } from "./navigation/tags/TagsList";
import { FirstArticle } from "./articles/FirstArticle";
import { OtherArticle } from "./articles/OtherArticle";

export default () => (
  <div className="container mx-auto">
    <TagsList/>
    <FirstArticle/>
    <div className="mt-12"/>
    <div className="flex flex-wrap justify-between">
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
    </div>
  </div>
);
