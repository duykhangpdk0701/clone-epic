import React from "react";
import PropTypes from "prop-types";
//import style
import style from "./CategoryItem.module.scss";

const CategoryItem = ({ data }) => {
  const handleItemClick = (e) => {
    console.log(data._id);
  };

  return (
    <li className={style.item} onClick={handleItemClick}>
      <span>{data.name}</span>
    </li>
  );
};

CategoryItem.propTypes = {
  data: PropTypes.object,
};

CategoryItem.defaultProps = {
  data: {},
};

export default CategoryItem;
