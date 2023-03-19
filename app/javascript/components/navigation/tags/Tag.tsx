import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const customStyles = {
  news:           'bg-tag-news hover:bg-tag-hover-news',
  absoluteNews:   'bg-tag-news hover:bg-tag-hover-news absolute top-3 left-3 bg-tag-news',
  case:           'bg-tag-case hover:bg-tag-hover-case',
  sales:          'bg-tag-sales hover:bg-tag-hover-sales',
  leadGeneration: 'bg-tag-leadGeneration hover:bg-tag-hover-leadGeneration',
  agencies:       'bg-tag-agencies hover:bg-tag-hover-agencies',
  inMyPlace:      'bg-tag-inMyPlace hover:bg-tag-hover-inMyPlace'
}

interface Props {
  text: string,
  url: string,
  type: string
}

const Tag = ({
  text,
  url,
  type
}: Props) => {
  const styles = classNames(
    `text-white  rounded-[10px] px-4 py-1.5 transition duration-300`,
    'md:text-base md:font-bold',
    'sm:text-sm sm:font-medium sm:leading-10',
    customStyles[type]
  );
  return (
    <>
      {
        <Link
          className={styles}
          to={url}
        >
          {text}
        </Link>
      }
    </>
  )
}

export default Tag;
