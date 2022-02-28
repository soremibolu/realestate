import React from "react";
import styledComponents from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";

import Pimg1 from '../images/pimages/p1.jpg';
import Pimg2 from '../images/pimages/p2.jpg';
import Pimg3 from '../images/pimages/p3.jpg';
import Pimg4 from '../images/pimages/p4.jpg';
import Agent from '../images/temptia1.png';



import {FaBath} from 'react-icons/fa';
import {MdKingBed} from 'react-icons/md';
import {MdChair} from 'react-icons/md';
import {FaPoundSign} from 'react-icons/fa';

const Propertysm = styledComponents.div`
  width:18rem ;
  height: auto;
  display:inline-block;
  background-color:white;
  border:1px solid lightgrey;
  border-radius: .2rem;
  box-shadow: 10px 10px 5px lightgrey;
  margin-bottom:2rem;

  .carousel-details{
      width:100%;
      height:auto;


    .carousel{
        width:100%;
        height:50%;
        
        img{
            width:100%; 
            height:100%
        }
    }
    
    .details-cover{
        display:flex; 
    }

    .details{
        width:70%;
        height:100%;

        p{
            margin:1rem;
            font-size:.8rem;
        }
        .p-title{
            font-weight:bold;
            margin-bottom:0rem;
            font-size:1rem;
        }
        .p-address{
            margin-top:0.3rem;
            color:grey;
        }
        .p-price{
            margin:.4rem;
            margin-left:.8rem;
            font-size:1.2rem;
        }
        .pounds{
            position:relative;
            top:.1rem;
        }

        .h-detail-cover{
            margin:.5rem;
            margin-left:.8rem;

            .h-detail{
                margin:.4rem;
                .h-iconba{
                    font-size:1rem;
                }
                .h-iconbe{
                    font-size:1.3rem;
                    margin-right:.33rem;
                    position:relative;
                    top:.3rem;
                }
                .h-iconch{
                    font-size:1rem;
                    margin-right:.33rem;
                    position:relative;
                    top:.13rem;                    
                }
                span{
                    font-size:1.2rem;
                }
            }
        }

    }
    .h-agent{
        width:30%;
        height:100%;
        img{
            margin-top:40%;
            margin-right:0rem;
            width:calc(100% - 1rem);
        }
    }
  }


  .awssld__bullets{
      display:none;
  }

  

    .awssld__controls__arrow-left, .awssld__controls__arrow-right {
        width: 100%;
        height: 1rem;
        display:inline-block;
    }

    .awssld__controls button{
        margin: 0 1rem;

    }

    .awssld__container {
        display: block;
        width: 100%;
        height: 0;
        padding-bottom: 60%;
    }

    

`;

function Propertysmall() {
  return (
    <>
        
        <Propertysm>
            <div className="carousel-details">
                <div className="carousel">
                <AwesomeSlider>                
                    <div><Link to="/property"><img src={Pimg1} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg2} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg3} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg4} alt="" /></Link></div>                    
                </AwesomeSlider>
                </div>
                <Link to="/property" style={{color:'black', textDecoration: 'none'}}>
                <div className="details-cover">
                    <div className="details">
                        <p className="p-title">1 flat to rent </p>
                        <p className="p-address">Abbeywood, London</p>
                        <h3 className="p-price"><FaPoundSign className="pounds" /> 1,320</h3>
                        <div className="h-detail-cover">
                            <span className="h-detail"><FaBath className="h-iconba" /> <span>1</span></span>
                            <span className="h-detail"><MdKingBed className="h-iconbe" /><span>1</span></span>
                            <span className="h-detail"><MdChair className="h-iconch" /><span>1</span></span>
                        </div>

                    </div>
                    <div className="h-agent">
                        <img src={Agent} alt="" />
                    </div>
                </div>
                </Link>
            </div>
        </Propertysm>
        
    </>
  );
}

export default Propertysmall;