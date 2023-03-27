import React from "react";
import PageNumber from "./PageNumber";
import SwitchPage from "./SwitchPage";

const PaginationPages = () => {
  return (
    <div className="flex flex-row justify-between">
      <SwitchPage text="В начало" type="first" />
      <div className="flex flex-row justify-between w-96">
        <PageNumber number={1} />
        <PageNumber number={2} />
        <PageNumber number={3} />
        <PageNumber number={4} />
        <PageNumber number={5} />
      </div>
      <SwitchPage text="Вперед" type="next" />
    </div>
  );
};

export default PaginationPages;
