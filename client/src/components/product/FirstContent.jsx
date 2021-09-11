import React from "react";
import styled from "styled-components";
//import redux action
import {
  addWishlist,
  removeWishlist,
} from "../../redux/actions/wishlistActions";

const FirstContent = ({ product, userId }) => {
  const handleAddWishlist = (e) => {
    addWishlist(userId, product.id);
  };

  return (
    <Section>
      <Content></Content>
      <SideContent></SideContent>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;

const Content = styled.div`
  flex-basis: calc(100% - 300px);
`;

const SideContent = styled.div`
  flex-basis: 300px;
  position: sticky;
  top: 0;
`;

export default FirstContent;
