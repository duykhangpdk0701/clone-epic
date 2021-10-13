import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
//import scss
import style from "./SortListProduct.module.scss";
import { ReplaceUrtUrl } from "../../../helper/RepalceSortUrl";

const SortListProduct = () => {
  const history = useHistory();
  const urlParams = useMemo(
    () =>
      queryString.parse(history.location.search, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      }),
    [history.location.search],
  );

  const handleSortNewRelease = () => {
    ReplaceUrtUrl("NewRelease", history, urlParams);
  };
  const handleSortReleaseDate = () => {
    ReplaceUrtUrl("ReleaseDate", history, urlParams);
  };
  const handleSortAlphabetical = () => {
    ReplaceUrtUrl("Alphabetical", history, urlParams);
  };
  const handleSortLowToHigh = () => {
    ReplaceUrtUrl("LowToHigh", history, urlParams);
  };
  const handleSortHighToLow = () => {
    ReplaceUrtUrl("HighToLow", history, urlParams);
  };

  return (
    <div className={style.drop_down}>
      <button>
        <span>Sort By: </span>
        <span>New release</span>
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
  );
};

export default SortListProduct;
