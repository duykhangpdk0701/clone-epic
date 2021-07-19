import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../style/color";
import { useDispatch } from "react-redux";
import { removeWishlist } from "../../redux/actions/wishlistActions";

const Item = (props) => {
  const dispatch = useDispatch();

  const handleAddWishlist = (e) => {
    console.log("hello my name is Khang");
    dispatch(removeWishlist(e.id));
  };

  return (
    <Container>
      <OuterLink to={`/product/${props.data.id}`}></OuterLink>
      <TitleImgWrapper>
        <Img src={props.data.imgBrowseUrl} />
        <Title>{props.data.name}</Title>
      </TitleImgWrapper>
      <PriceWrapper>
        <Price>{props.data.price}</Price>
      </PriceWrapper>
      <ActionImgWrapper></ActionImgWrapper>
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
