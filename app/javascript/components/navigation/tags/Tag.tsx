import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Props {
  text: string;
  url: string;
  type: string;
  customStyles?: string;
}

const customButtonTypes = {
  news: "bg-tag-news hover:bg-tag-hover-news",
  case: "bg-tag-case hover:bg-tag-hover-case",
  sales: "bg-tag-sales hover:bg-tag-hover-sales",
  leadGeneration: "bg-tag-leadGeneration hover:bg-tag-hover-leadGeneration",
  agencies: "bg-tag-agencies hover:bg-tag-hover-agencies",
  inMyPlace: "bg-tag-inMyPlace hover:bg-tag-hover-inMyPlace",
};

const Tag = ({ text, url, type, customStyles }: Props) => {
  const styles = classNames(
    `py-2 px-4 rounded-[10px] text-white font-medium whitespace-nowrap transition duration-300`,
    `lg:font-bold`,
    customButtonTypes[type],
    customStyles
  );
  return (
    <>
      {
        <Link className={styles} to={url}>
          {text}
        </Link>
      }
    </>
  );
};

export default Tag;
