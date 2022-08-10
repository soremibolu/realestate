import React, {useState} from "react";
import styledComponents from "styled-components";
import {SiTreehouse} from 'react-icons/si';
import { Link } from "react-router-dom";
import {MdAccountBox} from 'react-icons/md';
import {CgMenuRight} from 'react-icons/cg';
import {FaWindowClose} from 'react-icons/fa';

// Utilities
import { device } from "../utilities/Breakpoints";



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


.account-details, .phonemenubar{
    color:white;
    font-size:2rem;
    margin:.5rem;
    margin-right:1rem;  

    :hover{
       color:grey;
    } 

}

.account-details{
  @media ${device.mobile} {
    display:none;
  }
}


.phonemenubar{
  display:none;

  @media ${device.mobile} {
    display:inline-block;
  }
}

.menulinks{
  @media ${device.mobile} {
    display:none;
  }
}


`;


const Phonemenu = styledComponents.div`
  width:100%;
  height:0vh;
  background-color:white;
  position:fixed;
  top:0;
  z-index:13;
  overflow:hidden;
  transition:.2s;

  a{
    color:black;
    text-decoration:none;
    display:block;
    margin:12% 0;

    :hover{
       color:grey;
    }
  }

  
.phonemenubar{
  color:black;
  font-size:2rem;
  margin:.5rem;
  margin-right:1rem;  
  text-align:right;
  :hover{
     color:grey;
  } 

}

}


`

function Nav() {
  const [menustat, setMenustat] = useState(false)

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
            <CgMenuRight className="phonemenubar" onClick={() => setMenustat(true)} />
        </Navbar>


        <Phonemenu style={{height: menustat ? '100vh' : '0vh'}}>
            <div style={{textAlign:'right'}}>
              <FaWindowClose className="phonemenubar" onClick={() => setMenustat(false)} />
            </div>
            <center>
              <Link to="/properties">For sale</Link>
              <Link to="/properties">To Rent</Link>
              <Link to="/">Find agent</Link>
              <Link to="/">Property news</Link>
            </center>
        </Phonemenu>
    </>
  );
}

export default Nav;