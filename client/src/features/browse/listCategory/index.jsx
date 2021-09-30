import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../../app/categoriesSlice";

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
      <ul>
        {categories.map((item) => (
          <li key={item._id}>
            <div>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ListCategory;
