import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Tag = props => {
  const classnames = classNames(
    `lg:text-base md:text-sm text-white font-bold rounded-[10px] px-4 py-1.5 transition duration-300`,
    'md:leading-10',
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
