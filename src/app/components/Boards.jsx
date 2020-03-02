import { Link } from "react-router-dom";
import React from "react";

const Boards = ({ title, id }) => {
  return (
    <Link to={`/boards/${id}`}>
      <h2>{title}</h2>
    </Link>
  );
};

export default Boards;
