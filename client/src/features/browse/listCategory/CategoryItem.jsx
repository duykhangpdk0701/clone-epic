import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
//import style
import style from "./CategoryItem.module.scss";
import { removeItemOnce } from "../../../helper/RemoveItemFromArray";

const CategoryItem = ({ data }) => {
  const history = useHistory();
  const urlParams = useMemo(
    () =>
      queryString.parse(history.location.search, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      }),
    [history.location.search],
  );

  //  checking if this category active or not
  const isActive = useMemo(() => {
    if (urlParams.tag) {
      return urlParams.tag.includes(data.name);
    }
    return false;
  }, [urlParams.tag, data.name]);

  const handleItemClick = (e) => {
    let tag = urlParams.tag;

    if (Array.isArray(tag)) {
      if (tag.includes(data.name)) {
        tag = removeItemOnce(tag, data.name);
      } else {
        tag.push(data.name);
      }

      if (tag.length === 0) {
        history.replace({
          pathname: "/store/browse",
          search: queryString.stringify({ ...urlParams, tag: [] }),
        });
        return;
      }
      history.replace({
        pathname: "/store/browse",
        search: queryString.stringify(
          { ...urlParams, tag: tag },
          { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
        ),
      });
      return;
    }
    history.replace({
      pathname: `/store/browse`,
      search: queryString.stringify(
        { ...urlParams, tag: [data.name] },
        { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
      ),
    });
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
