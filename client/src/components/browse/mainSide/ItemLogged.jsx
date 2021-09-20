import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../../style/color";

import WishBtn from "./WishBtn";

const ItemLogged = (props) => {
  return (
    <Container>
      <LinkProduct as={Link} to={`product/${props.data.id}`}>
        <ImgContainer>
          <Img src={props.data.imgBrowseUrl} alt="" />
          <ImgHoverEffect className="img-hover-effect"></ImgHoverEffect>
        </ImgContainer>

        <ProductName>{props.data.name}</ProductName>
        <ProductDescription>{props.data.developer}</ProductDescription>
        <ProductPrice>
          {props.data.price === 0 ? "Free" : `${props.data.price}$`}
        </ProductPrice>
      </LinkProduct>
      <WishBtn productId={props.data.id} />
    </Container>
  );
};

const Container = styled.div`
  width: calc(20% - 12.8px);
  margin-left: 16px;
  position: relative;
  margin-bottom: 48px;

  :nth-child(5n + 1) {
    margin-left: 0px;
  }

  :hover .item-btn {
    opacity: 1;
    pointer-events: all;
  }

  :hover .purchased-btn {
    opacity: 0.9;
    pointer-events: all;
    cursor: default;
  }

  :hover .img-hover-effect {
    opacity: 1;
    transition: all 0.1s ease;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 5px;
`;

const ImgHoverEffect = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: all 0.1s ease;
  border-radius: 5px;
`;

const LinkProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductName = styled.span`
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductDescription = styled.span`
  color: ${colors.textWhileNonActive};
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  font-weight: 600;
  margin-top: 15px;
  font-size: 18px;
`;

export default ItemLogged;