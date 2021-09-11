import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//import child component
import FirstContent from "./FirstContent";

//color
import * as colors from "../../style/color";
//redux action
import { fetchProduct } from "../../redux/actions/productAction";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const userId = useSelector((state) => state.login.user.ids);

  useEffect(() => {
    fetchProduct(id, dispatch);
  }, [id, dispatch]);

  return (
    <Section>
      <Container>
        <HorizontalRule></HorizontalRule>
        <HeadLineContainer>
          <HeadLine>{product.name}</HeadLine>
        </HeadLineContainer>
        <FirstContent product={product} userId={userId} />
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
