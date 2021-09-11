import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import ItemLogged from "./ItemLogged";

//redux
import {
  fetchProducts,
  sortByLowToHigh,
  sortByNewRelease,
  sortByHighToLow,
  sortByAlphabetical,
} from "../../../redux/actions/productsActions";
import { fetchPurchase } from "../../../redux/actions/purchaseActions";
import Loading from "./LoadingItem";

const RenderItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLogged = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.user.ids);
  const location = useLocation();
  const paramUrl = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchPurchase(dispatch, userId);
  }, [dispatch, userId]);

  useEffect(() => {
    switch (paramUrl.get("sortBy")) {
      case "releaseDate":
        dispatch(sortByNewRelease());
        break;
      case "alphabetical":
        dispatch(sortByAlphabetical());
        break;
      case "lowToHigh":
        dispatch(sortByLowToHigh());
        break;
      case "highToLow":
        dispatch(sortByHighToLow());
        break;
      default:
        break;
    }
  }, [dispatch, paramUrl]);

  if (products.length === 0) {
    const arr = [...Array(10).keys()];
    return (
      <Container>
        {arr.map((item) => (
          <Loading key={item} />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      {products.map((item) => {
        if (item.isMatchSearch && isLogged) {
          return <ItemLogged data={item} key={item.id} />;
        } else if (item.isMatchSearch) {
          return <Item data={item} key={item.id} />;
        }
        return "";
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default RenderItem;
