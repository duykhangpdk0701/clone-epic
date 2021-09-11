import React, { useState } from "react";
import styled from "styled-components";
import SortByBtn from "./mainSide/SortByBtn";
import RenderItem from "./mainSide/RenderItem";

const Browse = () => {
  const sortType = [
    {
      name: "Release Date",
      var: "Release Date",
      urlVar: "releaseDate",
    },
    {
      name: "Alphabetical",
      var: "Alphabetical",
      urlVar: "alphabetical",
    },
    {
      name: "Price: Low to High",
      var: "Low to High",
      urlVar: "lowToHigh",
    },
    {
      name: "Price: High to Low",
      var: "High to Low",
      urlVar: "highToLow",
    },
  ];

  const [sortBySelected, setSortBySelected] = useState(sortType[0].var);

  return (
    <Section>
      <Container>
        <MainSide>
          <SortByBtn
            sortType={sortType}
            sortBySelected={sortBySelected}
            setSortBySelected={setSortBySelected}
          />
          <RenderItem />
        </MainSide>
        <Aside></Aside>
      </Container>
    </Section>
  );
};

const Section = styled.section``;

const Container = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
`;

const MainSide = styled.div`
  flex-basis: calc(100% - 245px);
`;

const Aside = styled.aside`
  flex-basis: 245px;
`;

export default Browse;
