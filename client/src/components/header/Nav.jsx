import React from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <div>
      <h1>this is Nav</h1>
    </div>
  );
};

Nav.propTypes = {
  username: PropTypes.string,
};

Nav.defaultProps = {
  username: "User",
};

export default Nav;
