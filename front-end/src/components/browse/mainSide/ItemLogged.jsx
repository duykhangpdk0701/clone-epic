import React, { useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../../style/color";
import { useSelector, useDispatch } from "react-redux";
import {
  removeWishlist,
  addWishlist,
} from "../../../redux/actions/wishlistActions";

const ItemLogged = (props) => {
  const dispatch = useDispatch();
  const productId = props.data.id;
  const userId = useSelector((state) => state.login.user.ids);
  const idProductInWishlist = useSelector((state) =>
    state.wishlist.map((item) => item.productId),
  );

  const idProductInPurchase = useSelector((state) =>
    state.purchase.map((item) => item.productId),
  );

  const existInPurchase = useMemo(
    () => idProductInPurchase.includes(productId),
    [idProductInPurchase, productId],
  );

  const existInWishlist = useMemo(
    () => idProductInWishlist.includes(productId),
    [idProductInWishlist, productId],
  );

  const handleAddWishlist = async () => {
    dispatch(addWishlist(userId, productId));
  };

  const handleRemoveWishlist = async () => {
    dispatch(removeWishlist(userId, productId));
  };

  const handleTesting = () => {
    console.log(existInWishlist);
  };

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
      {existInPurchase ? (
        <Btn className="item-btn purchased-btn" onClick={handleRemoveWishlist}>
          v
        </Btn>
      ) : existInWishlist ? (
        <Btn className="item-btn" onClick={handleRemoveWishlist}>
          x
        </Btn>
      ) : (
        <Btn className="item-btn" onClick={handleAddWishlist}>
          +
        </Btn>
      )}
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

const Btn = styled.button`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export default ItemLogged;
