import React from "react";
import TagsList from "./navigation/tags/TagsList";
import FirstArticle from "./articles/FirstArticle";
import OtherArticle from "./articles/OtherArticle";
import SubscribeEmail from "./custom_blocks/SubscribeEmail";
import Calendar from "./custom_blocks/Calendar";
import Glossary from "./custom_blocks/Glossary";
import OfferArticle from "./custom_blocks/offerArticle";
import PaginationPages from "./navigation/PaginationPages";

export default () => (
  <>
    <div className="mt-12"/>
    <TagsList/>
    {/* <FirstArticle/> */}
    <div className="flex flex-col space-y-7 mt-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-6 lg:grid-cols-3 lg:gap-6 xl:mt-12">
      {/* <OtherArticle/>
      <OtherArticle/>
      <OtherArticle/> */}
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
    <PaginationPages/>
    {/* <div className="mb-12"/> */}
  </>
);
