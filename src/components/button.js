import React from "react";
import styledComponents from "styled-components";

const Button = styledComponents.button`
  padding: .5rem .7rem;
  background-color:black;
  color:white;
  border:none;
  border-radius: .2rem;
  transition:.3s;
  cursor:pointer;
  font-size:1rem;
  :hover{
    background-color:grey;
    transition:.3s;
  }
`;

export default Button;