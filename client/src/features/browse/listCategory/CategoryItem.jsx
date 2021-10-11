import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
//import style
import style from "./CategoryItem.module.scss";
import { removeItemOnce } from "../../../helper/RemoveItemFromArray";

const CategoryItem = ({ data }) => {
  const history = useHistory();
  const isActive = useMemo(() => {
    const tagUrl = queryString.parse(history.location.search, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    }).tag;
    return tagUrl.includes(data.name);
  }, [history.location.search]);

  useEffect(() => {
    console.log("url change");
  }, [queryString.parse(history.location.search)]);

  const handleItemClick = (e) => {
    const urlParams = queryString.parse(history.location.search, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    });
    let tag = urlParams.tag;

    if (Array.isArray(tag)) {
      if (tag.includes(data.name)) {
        tag = removeItemOnce(tag, data.name);
      } else {
        tag.push(data.name);
      }
      const tagUrl = tag.join("|");
      history.replace(`/store/browse?tag[]=${tagUrl}`);
      return;
    }
    history.replace(`/store/browse?tag[]=${data.name}`);
  };

  return (
    <li
      className={isActive ? `${style.item} ${style.item_active}` : style.item}
      onClick={handleItemClick}>
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
