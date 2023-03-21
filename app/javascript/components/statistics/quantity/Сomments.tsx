import React from "react";
import { ReactSVG } from "react-svg";

interface Props {
  amountComments?: number,
}
const Comments = ({
  amountComments
}: Props) => {
  return (
    <>
      <ReactSVG src="statistic/comments.svg" className="self-center"/>
      <p className="ml-2">{amountComments}</p>
    </>
  )
}

export default Comments;
