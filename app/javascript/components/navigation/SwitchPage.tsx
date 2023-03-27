import React from "react";
import classNames from "classnames";

interface Props {
  text: string;
  type: string;
}

const switchTypes = {
  first: {
    styles: "",
  },
  prev: {
    styles: "",
  },
};

const SwitchPage = ({ text, type }) => {
  const styles = classNames(
    `w-72 xl:text-lg xl:leading-[4rem] font-semibold`,
    "shadow-previeArticle hover:shadow-hoverPrevieArticle text-center rounded-full cursor-pointer transition duration-300",
    ""
    // switchTypes[type]["styles"]
  );
  return <a className={styles}>{text}</a>;
};

export default SwitchPage;
