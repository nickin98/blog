import React from "react";
import Likes from "./quantity/Likes";
import QuantityComments from "./quantity/Сomments";

interface Props {
  like: number;
  comments?: number;
  date: string;
}

const Statistic = ({ like, comments = 0, date }: Props) => {
  return (
    <div className="flex text-staticText text-[15px] lg:text-base rounded-[22px]">
      {comments > 0 && <QuantityComments amountComments={comments} />}
      <Likes amountLikes={like} />
      <p className="ml-4">{date}</p>
    </div>
  );
};

export default Statistic;
