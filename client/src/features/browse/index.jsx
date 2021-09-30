import React from "react";
import style from "./browse.module.scss";
//import subNav
import SubNav from "../../components/header/subNav/SubNav";
import ListCategory from "./listCategory";
import ListProduct from "./listProduct";

const Browse = () => {
  return (
    <>
      <SubNav />
      <div className={style.container}>
        <ListProduct className={style.content} />
        <ListCategory className={style.category} />
      </div>
    </>
  );
};

export default Browse;
