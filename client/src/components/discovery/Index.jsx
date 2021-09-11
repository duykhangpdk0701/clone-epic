import React from "react";
import styled from "styled-components";
import LinkToBrowse from "./LinkToBrowse";

const Discovery = () => {
  return (
    <Section>
      <Container>
        <LinkToBrowse />
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

export default Discovery;
