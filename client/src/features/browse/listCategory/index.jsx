import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../../app/categoriesSlice";
//import style
import style from "./listCategory.module.scss";
//import icon
import { IoIosArrowDown } from "react-icons/io";
import CategoryItem from "./CategoryItem";

const ListCategory = ({ className }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [genreToggle, setGenreToggle] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const action = getAll();
      const actionResult = await dispatch(action);
      const currentResult = unwrapResult(actionResult);
      setCategories(currentResult);
    };
    fetchCategories();
    return;
  }, [dispatch]);

  const handleGenreBtn = () => {
    setGenreToggle(!genreToggle);
  };

  return (
    <aside className={className}>
      <div className={style.filter_section}>
        <div className={` ${style.header}`}>
          <div className={style.filter_title}>Filters</div>
        </div>
        <div className={style.header_line}></div>
      </div>

      <div className={style.filter_section}>
        <div className={`${style.header}`}>
          <button
            className={style.filter_title_collapse}
            onClick={handleGenreBtn}>
            <span className={style.filter_title_collapse_text}>GENRE</span>
            <span className={style.filter_title_collapse_arrow}>
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <ul
          className={
            genreToggle
              ? style.filter_ul
              : `${style.filter_ul} ${style.filter_ul_inactive}`
          }>
          {categories.map((item) => (
            <CategoryItem data={item} key={item._id} />
          ))}
        </ul>
        <div className={style.header_line}></div>
      </div>
    </aside>
  );
};

export default ListCategory;
