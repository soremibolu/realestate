import React, {useState} from 'react';
import styled from "styled-components";
import {FaChevronUp} from 'react-icons/fa';

const ScrollTop = styled.div`
    position: fixed;
    border-radius:.2rem;
    padding:0rem .3rem;
    background-color:black;
    right: 4%;
    bottom: 10%;
    font-size: 2.2rem;
    z-index: 1;
    cursor: pointer;
    color: white;

    :hover{
        background-color:darkgrey;
    }

`;


function ScrollToTop() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <ScrollTop onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}}>
            <FaChevronUp />
        </ScrollTop>
    );
  }
  
  export default ScrollToTop;