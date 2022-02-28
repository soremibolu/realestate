import React from "react";
import styledComponents from "styled-components";
import {MdOutlineCopyright} from 'react-icons/md';

const Footer = styledComponents.div`
  width:100%;
  background-color:black;
  height:3rem;
  margin-top:1rem;
  display:block;
  p{
      color:white;
      display:inline-block;
      margin-top:1rem;
  }

`;

function Footerc() {
  return (
    <>
        <Footer>
          <center>
              <p><MdOutlineCopyright /> 2022 REE housing</p>
          </center>
        </Footer>
    </>
  );
}

export default Footerc;