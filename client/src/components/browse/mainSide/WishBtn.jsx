import React, { useMemo } from "react";
import styled from "styled-components";
import * as colors from "../../../style/color";
import { useSelector, useDispatch } from "react-redux";
import {
  removeWishlist,
  addWishlist,
} from "../../../redux/actions/wishlistActions";

const WishBtn = ({ productId }) => {
  const dispatch = useDispatch();
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

  return (
    <BtnWrapper>
      <Btn
        className={existInPurchase ? "purchased-btn item-btn" : "item-btn"}
        onClick={
          existInPurchase
            ? ""
            : existInWishlist
            ? handleRemoveWishlist
            : handleAddWishlist
        }
        isPurchased={existInPurchase}>
        {existInPurchase ? (
          <MarkSign />
        ) : existInWishlist ? (
          <MarkSign />
        ) : (
          <InnerBtn></InnerBtn>
        )}
      </Btn>
    </BtnWrapper>
  );
};

const MarkSign = () => {
  return (
    <MarkSignWrapper>
      <svg
        className="mark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 468.8 468.8">
        <path
          fill="currentColor"
          strokeWidth="10"
          stroke="currentColor"
          d="M142.8 323.85L35.7 216.75 0 252.45l142.8 142.8 306-306-35.7-35.7z"></path>
      </svg>
    </MarkSignWrapper>
  );
};

const BtnWrapper = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
`;

const Btn = styled.button`
  height: 20px;
  width: 20px;
  border: 2px solid ${colors.textWhileActive};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isPurchased ? colors.primaryGreen : colors.primaryBlack};
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerBtn = styled.div`
  height: 12px;
  width: 12px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    height: 10px;
    width: 2px;
    background-color: ${colors.textWhileActive};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  ::before {
    height: 10px;
    width: 2px;
  }

  ::after {
    height: 2px;
    width: 10px;
  }
`;

const MarkSignWrapper = styled.div`
  width: 12px;

  .mark {
    color: ${colors.textWhileActive};
    height: 100%;
    width: 100%;
  }
`;

export default WishBtn;
