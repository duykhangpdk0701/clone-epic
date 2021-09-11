import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import * as color from "../../../style/color";
import { NavLink, Redirect, useLocation } from "react-router-dom";

const SortByBtn = (props) => {
  const [open, setOpen] = useState(false);
  const locations = useLocation();

  const param = useMemo(
    () => new URLSearchParams(locations.search).get("sortBy") || false,
    [locations.search],
  );

  const activeStyle = {
    color: color.textWhileActive,
    borderBottom: `1px solid ${color.textWhileActive}`,
  };

  const handleSelectSortBy = (e) => {
    props.setSortBySelected(e.target.title);
    setOpen(!open);
  };

  const isActive = (match, location, element) => {
    const param = new URLSearchParams(location.search);
    const value = param.get("sortBy");
    if (value === element.urlVar) {
      return true;
    }
    return false;
  };

  return (
    <SortByContainer>
      {param ? <Redirect to="/browse?sortBy=releaseDate" /> : ""}
      <BtnContainer>
        <Btn onClick={() => setOpen(!open)}>
          <span className="first-span">Sort By: </span>
          <span className="second-span">{props.sortBySelected}</span>
          <IoIosArrowDown className={`icon ${open ? "icon-active" : ""}`} />
        </Btn>
        <Ul className={open ? "active" : ""}>
          {props.sortType.map((element, index) => {
            return (
              <Li key={index}>
                <NavLink
                  url={element.urlVar}
                  onClick={handleSelectSortBy}
                  activeStyle={activeStyle}
                  title={element.var}
                  to={`/browse?sortBy=${element.urlVar}`}
                  isActive={(match, location) =>
                    isActive(match, location, element)
                  }>
                  {element.name}
                </NavLink>
              </Li>
            );
          })}
        </Ul>
      </BtnContainer>
    </SortByContainer>
  );
};

const SortByContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .active {
    opacity: 1;
    pointer-events: all;
  }
`;

const BtnContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const Btn = styled.button`
  background: none;
  display: flex;
  align-items: center;
  border: none;
  height: 100%;

  .first-span {
    color: ${color.textWhileNonActive};
    font-weight: 600;
    font-size: 14px;
  }

  .second-span {
    color: ${color.textWhileActive};
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }

  .icon {
    position: relative;
    color: ${color.textWhileActive};
    margin-left: 5px;
    transition: all 0.3s ease;
  }

  .icon-active {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
`;

const Ul = styled.ul`
  position: absolute;
  background-color: ${color.secondaryBlack};
  opacity: 0;
  pointer-events: none;
  width: 100%;
  transition: all 0.3 ease;
  padding: 10px;
`;

const Li = styled.li`
  a {
    color: ${color.textWhileNonActive};
    font-size: 12px;

    :hover {
      color: ${color.textWhileActive};
      border-bottom: 1px solid ${color.textWhileActive};
    }
  }
`;

export default SortByBtn;
