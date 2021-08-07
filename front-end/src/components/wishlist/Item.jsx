import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../style/color";

const Item = (props) => {
  const infoProductInWishlist = props.data;

  return (
    <Container>
      <OuterLink to={`/product/${infoProductInWishlist.productId}`}>
        <TitleImgWrapper>
          <Img src={infoProductInWishlist.imgBrowseUrl} />
          <Title>{infoProductInWishlist.name}</Title>
        </TitleImgWrapper>
        <PriceWrapper>
          <Price>{infoProductInWishlist.price}</Price>
        </PriceWrapper>
        <ActionImgWrapper></ActionImgWrapper>
      </OuterLink>
    </Container>
  );
};

const Container = styled.div`
  min-height: 80px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  background-color: ${colors.secondaryBlack};
  align-items: stretch;
`;

const OuterLink = styled(Link)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const TitleImgWrapper = styled.div`
  order: 1;
  flex-grow: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`;

const Title = styled.span``;

const PriceWrapper = styled.div`
  order: 2;
`;

const Price = styled.span``;

const ActionImgWrapper = styled.div`
  order: 3;
`;

export default Item;
