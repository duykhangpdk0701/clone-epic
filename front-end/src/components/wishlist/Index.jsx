import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "./Item";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <Section>
      <Container>
        {wishlist.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </Container>
    </Section>
  );
};

const Section = styled.section``;

const Container = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default WishList;
