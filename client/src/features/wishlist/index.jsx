import React from "react";
import SubNav from "../../components/header/subNav/SubNav";
import style from "./wishlist.module.scss";

const Wishlist = () => {
  return (
    <>
      <SubNav />
      <div className={style.container}>
        <h1>this is wish list page</h1>
      </div>
    </>
  );
};

export default Wishlist;
