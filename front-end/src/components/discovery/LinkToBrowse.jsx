import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../style/color";

const LinkToBrowse = () => {
  return (
    <Container>
      <SmallTitle>Dice Games Store Catalog</SmallTitle>

      <StoreBreakerWrapperContent>
        <StoreBreakerContent>
          <StoreBreakerContentTitle>Browse</StoreBreakerContentTitle>
          <StoreBreakerDescription>
            Explore our catalog for your next favorite game!
          </StoreBreakerDescription>
          <StoreBreakerLinkToBrowse to="/browse">
            Browse all
          </StoreBreakerLinkToBrowse>
        </StoreBreakerContent>
        <StoreBreakerWrapperImg>
          <StoreBreakerImg src="./img/to-browse.png" />
        </StoreBreakerWrapperImg>
      </StoreBreakerWrapperContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const SmallTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
`;

const StoreBreakerWrapperContent = styled.div`
  background: rgb(65, 0, 185)
    linear-gradient(to right bottom, rgb(65, 0, 185), rgb(0, 198, 255));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

const StoreBreakerContent = styled.div`
  padding-left: 60px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StoreBreakerContentTitle = styled.h1`
  font-size: 50px;
  padding-bottom: 15px;
  font-weight: 600;
`;

const StoreBreakerDescription = styled.p`
  color: ${colors.textWhileActive};
  opacity: 0.5;
  padding-bottom: 20px;
  font-size: 20px;
`;

const StoreBreakerLinkToBrowse = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  min-width: 200px;
  height: 50px;
  border-radius: 4px;
  font-weight: 600;

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const StoreBreakerWrapperImg = styled.div`
  flex-basis: 50%;
  margin-left: 50px;
  overflow: hidden;
  object-fit: contain;
`;

const StoreBreakerImg = styled.img`
  height: 100%;
  width: 100%;
`;

export default LinkToBrowse;
