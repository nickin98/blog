import React from "react";
import { ReactSVG } from "react-svg";

interface Props {
  amountLikes: number;
}
const Likes = ({ amountLikes }: Props) => {
  return (
    <>
      <ReactSVG src="statistic/like.svg" className="self-center ml-4" />
      <p className="ml-2">{amountLikes}</p>
    </>
  );
};

export default Likes;
