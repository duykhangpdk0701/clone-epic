import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../../app/categoriesSlice";
//import style
import style from "./listCategory.module.scss";
//import icon
import { IoIosArrowDown } from "react-icons/io";

const ListCategory = ({ className }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

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
          <button className={style.filter_title_collapse}>
            <span className={style.filter_title_collapse_text}>GENRE</span>
            <span className={style.filter_title_collapse_arrow}>
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <ul>
          {categories.map((item) => (
            <li key={item._id}>
              <div>
                <p>{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.header_line}></div>
      </div>
    </aside>
  );
};

export default ListCategory;
