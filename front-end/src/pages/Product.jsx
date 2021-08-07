import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//redux action
import { fetchProduct } from "../redux/actions/productAction";
import { addWishlist, removeWishlist } from "../redux/actions/wishlistActions";
import { purchase } from "../redux/actions/purchaseActions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const userId = useSelector((state) => state.login.user.ids);

  useEffect(() => {
    fetchProduct(id, dispatch);
  }, [id, dispatch]);

  const handleAddWishlist = (e) => {
    addWishlist(userId, product.id);
  };

  return (
    <Section>
      <Container>
        <h1>{product.name}</h1>
        <h1>{product.id}</h1>
        <h1>{userId}</h1>
      </Container>
    </Section>
  );
};

const Section = styled.section``;

const Container = styled.div`
  width: 75%;
  margin: auto;
`;

export default Product;
