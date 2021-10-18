import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import queryString from "query-string";
//import scss
import style from "./SortListProduct.module.scss";
//import feature
import { ReplaceUrl } from "../../../helper/ReplaceSortUrl";
import * as SortType from "../../../helper/SortType";

const SortListProduct = () => {
  const [currentSort, setCurrentSort] = useState(SortType.NEW_RELEASE.value);
  const history = useHistory();
  const pathnameUrl = history.location.pathname;

  const urlParams = useMemo(
    () =>
      queryString.parse(history.location.search, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      }),
    [history.location.search],
  );

  useEffect(() => {
    const sortByUrl = urlParams.sortBy;
    switch (sortByUrl) {
      case SortType.NEW_RELEASE.urlValue:
        setCurrentSort(SortType.NEW_RELEASE.value);
        break;
      case SortType.RELEASE_DATE.urlValue:
        setCurrentSort(SortType.RELEASE_DATE.value);
        break;
      case SortType.ALPHABETICAL.urlValue:
        setCurrentSort(SortType.ALPHABETICAL.value);
        break;
      case SortType.LOW_TO_HIGH.urlValue:
        setCurrentSort(SortType.LOW_TO_HIGH.value);
        break;
      case SortType.HIGH_TO_LOW.urlValue:
        setCurrentSort(SortType.HIGH_TO_LOW.value);
        break;
      default:
        break;
    }
  }, [setCurrentSort, urlParams.sortBy]);

  const handleSortType = (sortType) => {
    return ReplaceUrl(sortType, urlParams);
  };

  const generateToUrl = (url) => `${pathnameUrl}?${handleSortType(url)}`;

  const isActive = (sortType) => (match, location) => {
    if (!match) {
      return false;
    }
    const { sortBy } = queryString.parse(location.search, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    });
    return sortBy === sortType ? true : false;
  };

  return (
    <div className={style.side_bar}>
      <div className={style.drop_down}>
        <button className={style.nav_button}>
          <span className={style.static_type}>Sort By: </span>
          <span className={style.value}>{currentSort}</span>
          <span className={style.icon}></span>
        </button>
        <div className={style.nav_container}>
          <NavLink
            className={style.nav_link}
            activeClassName={style.nav_link_active}
            isActive={isActive(SortType.NEW_RELEASE.urlValue)}
            to={generateToUrl(SortType.NEW_RELEASE.urlValue)}>
            New Release
          </NavLink>
          <NavLink
            className={style.nav_link}
            activeClassName={style.nav_link_active}
            isActive={isActive(SortType.RELEASE_DATE.urlValue)}
            to={generateToUrl(SortType.RELEASE_DATE.urlValue)}>
            Release Date
          </NavLink>
          <NavLink
            className={style.nav_link}
            activeClassName={style.nav_link_active}
            isActive={isActive(SortType.ALPHABETICAL.urlValue)}
            to={generateToUrl(SortType.ALPHABETICAL.urlValue)}>
            Alphabetical
          </NavLink>
          <NavLink
            className={style.nav_link}
            activeClassName={style.nav_link_active}
            isActive={isActive(SortType.LOW_TO_HIGH.urlValue)}
            to={generateToUrl(SortType.LOW_TO_HIGH.urlValue)}>
            Price: Low to High
          </NavLink>
          <NavLink
            className={style.nav_link}
            activeClassName={style.nav_link_active}
            isActive={isActive(SortType.HIGH_TO_LOW.urlValue)}
            to={generateToUrl(SortType.HIGH_TO_LOW.urlValue)}>
            Price: High to Low
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SortListProduct;
