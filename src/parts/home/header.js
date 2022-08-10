import React from "react"; 
import styledComponents from "styled-components";
import Searchcover from "../../components/homesearchbox";
import bg from "../../images/bg1.jpg";


// Utilities
import { device } from "../../utilities/Breakpoints";

const Headerl = styledComponents.div`
  width:100%;
  height:30rem;
  display:inline-block;
  background-image:url(${bg});
  background-size:cover;
  background-position:center;
  border-radius:.3rem;

  @media ${device.mobile} {
    height:auto;
  }

  .s-cover{
      margin:8rem 5rem;
   
    @media ${device.mobile} {
      margin:2rem 1rem;
    }
  }
`;

function Header() {
  return (
    <>
    <div>
        <Headerl>
            <div className="s-cover">
                <Searchcover />
            </div>
        </Headerl>
    </div>
    </>
  );
}

export default Header;