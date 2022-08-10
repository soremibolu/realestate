import React from "react";
import styledComponents from "styled-components";
import blogimg from "../images/img1.jpeg";
import { Link } from "react-router-dom";

// Utilities
import { device } from "../utilities/Breakpoints";

const Bigblog = styledComponents.div`
  width:60%;
  margin:.5rem 0;
  text-align:justify;

  img{
      width:100%;
      border-radius:.3rem;
  }

  h2{
    margin:.5rem 0;
  }
  p{
    margin:.3rem 0;
    font-size:1.1rem;
  }

  .date{
      color:grey;
      float:right;
      font-size:0.9rem
  }

  .seemore{
    display:block;
    width:100%;
    margin-top:3rem;

    a{
        color:black;
        text-decoration-color:grey;
    }
  }


  @media ${device.mobile} {
    width:100%;
  }
`;

function Blogsub() {
  return (
    <>
        <Bigblog>
            <img src={blogimg} alt="" />
            <h2>This will be the title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet dui et neque hendrerit malesuada. Nunc sit amet turpis auctor, ultrices quam vel, eleifend turpis. In egestas consequat velit et molestie. In hac habitasse platea dictumst. Fusce tristique tempor nisi id commodo. Aliquam at augue quam. Aenean id urna tincidunt, suscipit ante non, sodales purus. Duis magna nulla, gravida sed risus vel, congue condimentum dolor. Pellentesque nec augue consequat, pulvinar ipsum sit amet, mollis nulla.</p>
            <p className="date">12th July, 2022</p>

            <div className="seemore">
            <Link to="/">See more property news</Link>
            </div>
        </Bigblog>
    </>
  );
}

export default Blogsub;