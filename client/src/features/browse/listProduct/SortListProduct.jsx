import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
//import scss
import style from "./SortListProduct.module.scss";
import { ReplaceUrtUrl } from "../../../helper/ReplaceSortUrl";
import * as SortType from "../../../helper/SortType";

const SortListProduct = () => {
  const [currentSort, setCurrentSort] = useState("New release");
  const history = useHistory();
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
  });

  const handleSortNewRelease = () => {
    ReplaceUrtUrl(SortType.NEW_RELEASE.urlValue, history, urlParams);
    setCurrentSort(SortType.NEW_RELEASE.urlValue);
  };
  const handleSortReleaseDate = () => {
    ReplaceUrtUrl(SortType.RELEASE_DATE.urlValue, history, urlParams);
    setCurrentSort(SortType.RELEASE_DATE.urlValue);
  };
  const handleSortAlphabetical = () => {
    ReplaceUrtUrl(SortType.ALPHABETICAL.urlValue, history, urlParams);
    setCurrentSort(SortType.ALPHABETICAL.urlValue);
  };
  const handleSortLowToHigh = () => {
    ReplaceUrtUrl(SortType.LOW_TO_HIGH.urlValue, history, urlParams);
    setCurrentSort(SortType.LOW_TO_HIGH.urlValue);
  };
  const handleSortHighToLow = () => {
    ReplaceUrtUrl(SortType.HIGH_TO_LOW.urlValue, history, urlParams);
    setCurrentSort(SortType.HIGH_TO_LOW.urlValue);
  };

  return (
    <div className={style.side_bar}>
      <div className={style.drop_down}>
        <button className={style}>
          <span>Sort By: </span>
          <span>{currentSort}</span>
          <span></span>
        </button>
        <div>
          <button onClick={handleSortNewRelease}>New release</button>
          <button onClick={handleSortReleaseDate}>Release date</button>
          <button onClick={handleSortAlphabetical}>Alphabetical</button>
          <button onClick={handleSortLowToHigh}>Price: Low to High</button>
          <button onClick={handleSortHighToLow}>Price: Hight to Low</button>
        </div>
      </div>
    </div>
  );
};

export default SortListProduct;
