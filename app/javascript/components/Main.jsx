import React from "react";
import { TagsList } from "./navigation/tags/TagsList";
import { FirstArticle } from "./articles/FirstArticle";
import { OtherArticle } from "./articles/OtherArticle";
import SubscribeEmail from "./custom_blocks/SubscribeEmail";
import Calendar from "./custom_blocks/Calendar";
import Glossary from "./custom_blocks/Glossary";
import OfferArticle from "./custom_blocks/offerArticle";
import Paginations from "./navigation/paginations";

export default () => (
  <div className="container mx-auto">
    <div className="mt-12"/>
    <TagsList/>
    <FirstArticle/>
    <div className="mt-12"/>
    <div className="flex flex-wrap gap-x-1 gap-y-3 justify-between">
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <SubscribeEmail/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <Calendar/>
      <Glossary/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/>
      <OfferArticle/>
    </div>
    <div className="mt-12"/>
    <Paginations/>
    <div className="mb-12"/>
  </div>
);
