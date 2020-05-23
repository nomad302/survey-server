import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Landing = () => {
  return (
    <Page>
      <h1>Survey Box</h1>
    </Page>
  );
};

export default Landing;
