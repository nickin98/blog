import React from "react";
import { Link } from "react-router-dom";

const Tag = props => {
  return (
    <div className="bg-red-500"> 
      <Link to={props.url}>{props.name}</Link>
    </div>
  )
}

export {Tag}
