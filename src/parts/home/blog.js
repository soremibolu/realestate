import React from "react";
import styledComponents from "styled-components";
import Blogoth from "../../components/blogoth";
import Blogsub from "../../components/mainblog";
import Title from "../../components/title";

const Blogh = styledComponents.div`
  width:100%;
  display:flex;
`;

function Bloghome() {
  return (
    <div>
        <Title>Property News</Title>
        <Blogh>
            <Blogsub />
            <Blogoth />
        </Blogh>
    </div>
  );
}

export default Bloghome;