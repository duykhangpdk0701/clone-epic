import React from "react";
//import subNav
import SubNav from "../../components/header/subNav/SubNav";
//import style
import style from "./discover.module.scss";

function Discover() {
  return (
    <>
      <SubNav />
      <div className={style.container}>
        <h1>this is discover page</h1>
      </div>
    </>
  );
}

export default Discover;
