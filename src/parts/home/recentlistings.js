import React from "react";
import styledComponents from "styled-components";
import Title from "../../components/title";
import Propertysmall from "../../components/propertysmall";
// Utilities
import { device } from "../../utilities/Breakpoints";

const Recentl = styledComponents.div`
  width:100%;
  display:flex;
  justify-content:space-evenly;

  @media ${device.mobile} {
    flex-direction:column;
  }
`;

function Recent() {
  return (
    <>
    <div>
        <Title>Recent listings</Title>
        <Recentl>
            <Propertysmall />
            <Propertysmall />
            <Propertysmall />
        </Recentl>
    </div>
    </>
  );
}

export default Recent;