import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Item = ({ data }) => {
  return (
    <div>
      <Link to={`/store/product/${data._id}`}>
        <p>{data._id}</p>
        <p>{data.name}</p>
      </Link>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.object,
};

Item.defaultProps = {
  data: {},
};

export default Item;
