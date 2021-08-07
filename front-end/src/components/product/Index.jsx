import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//color
import * as colors from "../../style/color";
//redux action
import { fetchProduct } from "../../redux/actions/productAction";
import {
  addWishlist,
  removeWishlist,
} from "../../redux/actions/wishlistActions";
import { purchase } from "../../redux/actions/purchaseActions";

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
        <HorizontalRule></HorizontalRule>
        <HeadLineContainer>
          <HeadLine>{product.name}</HeadLine>
        </HeadLineContainer>
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

const HorizontalRule = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.textWhileNonActive};
  opacity: 0.4;
`;

const HeadLineContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const HeadLine = styled.span`
  font-weight: 400;
  font-size: 50px;
`;

export default Product;
