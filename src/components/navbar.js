import React from "react";
import styledComponents from "styled-components";
import {SiTreehouse} from 'react-icons/si';
import { Link } from "react-router-dom";
import {MdAccountBox} from 'react-icons/md';



const Navbar = styledComponents.div`
  width:100%;
  height:3rem;
  background-color:black;
  position:fixed;
  top:0;
  display:flex;
  justify-content:space-between;
  z-index:12;
.mainmenu{
    display:flex;
    .logo-cover{
      .logo{
        color:white;
        font-size:2rem;
        margin:.5rem;
        margin-left:1rem;  
        display:inline-block;
    }
    p{
        color:white;
        font-size:1.7rem;
        margin:.5rem;
        margin-left:0;  
        display:inline-block;
        position:relative;
        top:-0.8rem;
    }
  }

  a{
    color:white;
    text-decoration:none;
    display:inline-block;

    :hover{
       color:grey;
    }
  }

  .menulinks a{
      margin: 1rem 1rem;
  }
}


.account-details{
    color:white;
    font-size:2rem;
    margin:.5rem;
    margin-right:1rem;  

    :hover{
       color:grey;
    } 
}
  
`;

function Nav() {
  return (
    <>
        <Navbar>
            <div className="mainmenu">
                
                <Link to="/"><div className="logo-cover">
                    <SiTreehouse className="logo"/>
                    <p>REE</p>
                </div></Link>
                <div className="menulinks">
                    <Link to="/properties">For sale</Link>
                    <Link to="/properties">To Rent</Link>
                    <Link to="/">Find agent</Link>
                    <Link to="/">Property news</Link>
                </div>
            </div>
            <Link to="/">
                <MdAccountBox className="account-details" />
            </Link>
        </Navbar>
    </>
  );
}

export default Nav;