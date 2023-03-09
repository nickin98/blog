import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Tag = props => {
  const classnames = classNames(
    `text-base text-white font-bold rounded-[10px] px-4 py-2 transition duration-300`,
    props.styles
  )
  return (
    <>
      {
        <Link
          key={props.id}
          className={classnames}
          to={props.url}
        >
          {props.name}
        </Link>
      }
    </>
  )
}

export {Tag}
