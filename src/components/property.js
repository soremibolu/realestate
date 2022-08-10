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
import {GrMail} from 'react-icons/gr';
import {FaHeart} from 'react-icons/fa';
import {FaPoundSign} from 'react-icons/fa';
// Utilities
import { device } from "../utilities/Breakpoints";


const Property = styledComponents.div`
  width:53rem ;
  display:inline-block;
  background-color:white;
  border:1px solid lightgrey;
  border-radius: .2rem;
  box-shadow: 10px 10px 5px lightgrey;
  margin-bottom:2rem;

  @media ${device.mobile} {
    width:100%;
  }

    .othcov{
        width:50%;
        height:auto;
        display:flex;
        color:black;
        text-decoration:none;

        @media ${device.mobile} {
            width:100%;
        }
    }

  .carousel-details{
      width:100%;
      height:auto;
      display:flex;

      @media ${device.mobile} {
        flex-direction: column;
      }


    .carousel{
        width:50%;
        height:100%;
        
        @media ${device.mobile} {
            display:block;
            width:100%;
          }
        
        img{
            width:100%; 
            height:100%
        }
    }

    
    .details{
        width:80%;
        height:100%;


        p{
            margin:1rem;
            font-size:1.1rem;
        }
        .p-title{
            font-weight:bold;
            margin-bottom:0rem;
            font-size:1.2rem;
        }
        .p-address{
            margin-top:0.3rem;
            color:grey;
        }
        .p-price{
            margin:1rem;
            margin-left:.8rem;
            font-size:1.5rem;
        }
        .pounds{
            position:relative;
            top:.2rem;
        }

        .h-detail-cover{
            margin:1rem;
            margin-left:.8rem;

            .h-detail{
                margin:.4rem;
                .h-iconba{
                    font-size:1.2rem;
                }
                .h-iconbe{
                    font-size:1.5rem;
                    margin-right:.33rem;
                    position:relative;
                    top:.3rem;
                }
                .h-iconch{
                    font-size:1.2rem;
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
        width:20%;
        height:100%;
        img{
            margin-top:100%;
            margin-right:1rem;
            width:calc(100% - 1rem);
        }

        @media ${device.mobile} {
           display:none;
          }
    }
  }

  .contact{
    width:100%;
    height:2.3rem;
    display:flex;
    justify-content: space-between;

    @media ${device.mobile} {
        flex-direction: column;
        height:auto;
      }


    p{
        margin:.3rem 1rem;
    }

    .h-contact{
        margin:.3rem 1rem;
        .h-c{
            margin:0rem 1rem;
            cursor:pointer;
            .c-icon{
                font-size:1.3rem;
            }
            span{
                display:inline-block;
                font-size:1.2rem;
                position:relative;
                top:-0.2rem;
            }
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

function Propertysub({ propertyDetails }) {
  return (
    <>
        <Property>
            <div className="carousel-details">
                <div className="carousel">
                <AwesomeSlider>
                    <div><Link to="/property"><img src={Pimg1} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg2} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg3} alt="" /></Link></div>
                    <div><Link to="/property"><img src={Pimg4} alt="" /></Link></div>                    
                </AwesomeSlider>
                </div>
                <Link to="/property" className="othcov">
                <div className="details">
                    <p className="p-title">{propertyDetails.title}</p>
                    <p className="p-address">{propertyDetails.location}</p>
                    <h3 className="p-price"><FaPoundSign className="pounds" /> {propertyDetails.price}</h3>
                    <div className="h-detail-cover">
                        <span className="h-detail"><FaBath className="h-iconba" /> <span>{propertyDetails.bath}</span></span>
                        <span className="h-detail"><MdKingBed className="h-iconbe" /><span>{propertyDetails.bed}</span></span>
                        <span className="h-detail"><MdChair className="h-iconch" /><span>{propertyDetails.reception}</span></span>
                    </div>
                </div>
                <div className="h-agent">
                    <img src={Agent} alt="" />
                </div>
                </Link>
            </div>
            <div className="contact">
                <p>Listed on {propertyDetails.date} </p>
                <div className="h-contact">
                    <span className="h-c"><GrMail className="c-icon" /> <span>Email</span></span>
                    <span className="h-c"><FaHeart className="c-icon" /> <span>Save</span></span>
                </div>
            </div>
        </Property>
        
    </>
  );
}

export default Propertysub;