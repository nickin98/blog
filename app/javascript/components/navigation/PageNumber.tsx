import React from "react";
import classNames from "classnames";

interface Props {
  number: number;
}

const styles = () => {
  return classNames(
    `font-semibold text-center`,
    "xl:w-16 xl:h-16 lg:w-16 lg:h-16 md:w-12 md:h-12",
    "xl:text-lg xl:leading-[4rem] lg:leading-[4rem] ",
    "shadow-previeArticle hover:shadow-hoverPrevieArticle rounded-full cursor-pointer transition duration-300"
  );
};

const PageNumber = ({ number }) => {
  return <a className={styles()}>{number}</a>;
};

export default PageNumber;
