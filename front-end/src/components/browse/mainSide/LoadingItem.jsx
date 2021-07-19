import React from "react";
import styled from "styled-components";
import * as colors from "../../../style/color";

const LoadingItem = () => {
  return (
    <Container>
      <ImgContainer>
        <InnerImgContainer></InnerImgContainer>
      </ImgContainer>
      <ProductName></ProductName>
      <ProductDescription></ProductDescription>
      <ProductPrice></ProductPrice>
    </Container>
  );
};

const Container = styled.div`
  width: calc(20% - 12.8px);
  margin-left: 16px;
  position: relative;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;

  :nth-child(5n + 1) {
    margin-left: 0px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
  overflow: hidden;
  background-color: ${colors.secondaryBlack};
  border-radius: 5px;
`;

const InnerImgContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const ProductName = styled.span`
  margin-top: 20px;
  margin-bottom: 3px;
  height: 15px;
  background-color: ${colors.secondaryBlack};
  width: 100%;
  border-radius: 4px;
`;

const ProductDescription = styled.span`
  color: ${colors.textWhileNonActive};
  background-color: ${colors.secondaryBlack};
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 15px;
  border-radius: 4px;
`;

const ProductPrice = styled.span`
  background-color: ${colors.secondaryBlack};
  width: 30%;
  margin-top: 15px;
  height: 18px;
  border-radius: 4px;
`;
export default LoadingItem;
