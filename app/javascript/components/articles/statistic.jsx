import React from "react";
import { ReactSVG } from "react-svg";

const Statistic = () => {
  return (
    <div className="flex text-staticText text-[15px] lg:text-base rounded-[22px]">
      <ReactSVG src="statistic/comments.svg" className="self-center"/>
      <p className="ml-2">22</p>
      <ReactSVG src="statistic/like.svg" className="self-center ml-4"/>
      <p className="ml-2">19</p>
      <p className="ml-4">09.03.2023</p>
    </div>
  )
}

export {Statistic}
