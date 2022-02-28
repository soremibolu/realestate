import React from "react";
import styledComponents from "styled-components";
import blogimg from "../images/img2.jpeg";

const Blogsm = styledComponents.div`
    width:35%;
    margin:.5rem 0;
    margin-left:5%;
    text-align:justify;

    .blogsm{
        display:inline-block;
        width:100%;
        margin-bottom:1rem;

        img{
            width:100%;
            border-radius:.3rem;
        }
    
        h2{
        margin:.5rem 0;
        }
    
        .date{
            color:grey;
            float:right;
            font-size:0.9rem
        }
    }
   
`;

function Blogoth() {
  return (
    <>
        <Blogsm>
            <div className="blogsm">
                <img src={blogimg} alt="" />
                <h2>This will be the title</h2>
                <p className="date">12th July, 2022</p>
            </div>
            <div className="blogsm">
                <img src={blogimg} alt="" />
                <h2>This will be the title</h2>
                <p className="date">12th July, 2022</p>
            </div>
            <div className="blogsm">
                <img src={blogimg} alt="" />
                <h2>This will be the title</h2>
                <p className="date">12th July, 2022</p>
            </div>
        </Blogsm>
    </>
  );
}

export default Blogoth;