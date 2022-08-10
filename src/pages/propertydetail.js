import React from "react";
import PageWrap from "../components/pagewrap";
import Navbar from '../components/navbar';
import Propertysmall from "../components/propertysmall";
import styledComponents from "styled-components";
import Title from "../components/title";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Footer from "../components/footer";

import Pimg1 from '../images/pimages/p1.jpg';
import Pimg2 from '../images/pimages/p2.jpg';
import Pimg3 from '../images/pimages/p3.jpg';
import Pimg4 from '../images/pimages/p4.jpg';



import {FaBath} from 'react-icons/fa';
import {MdKingBed} from 'react-icons/md';
import {MdChair} from 'react-icons/md';
import {FaPoundSign} from 'react-icons/fa';
import Map from "../components/Map";

import ScrollToTop from "../components/ScrollToTop";
// Utilities
import { device } from "../utilities/Breakpoints";

const Pdetail = styledComponents.div`
display:flex;
justify-content:space-between;

.propertylist{
    width:53rem;

    @media ${device.mobile} {
        width: 100%;
      }

    .carousel{
        width:100%;
        
        img,div{
            width:100%; 
            height:auto;
        }
    }

    
.details-cover{
    display:flex; 
}

.details{
    width:100%;
    height:100%;

    p{
        margin:1rem;
        font-size:1rem;
    }
    .p-title{
        font-weight:bold;
        margin-bottom:0rem;
        font-size:2.1rem;
    }
    .p-address{
        margin-top:0.3rem;
        color:grey;
    }
    .p-price{
        margin:.4rem;
        margin-left:.8rem;
        font-size:1.6rem;
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

            @media ${device.mobile} {
                display:block;
              }
            .h-iconba{
                font-size:1.5rem;
            }
            .h-iconbe{
                font-size:1.8rem;
                margin-right:.33rem;
                position:relative;
                top:.4rem;
            }
            .h-iconch{
                font-size:1.5rem;
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
}
.adsandothers{
    width:18rem;
    display:inline-block;

    @media ${device.mobile} {
        display:none;
      }
}

.select__input-container{
    display:none;
}

.head{
    display:flex;
    justify-content: space-between;
    width:53rem;

    .filter{
        width:10rem;
        height:auto;
        display:flex;
        align-items:center;

        .basic-single{
            width:100%;
        }
    }
}

.desc{
    margin:.3rem 0;
    font-size:1.1rem;
  }

  .date{
      color:grey;
      float:right;
      font-size:0.9rem
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

function Propertydetail() {

  return (
    <>
    <Navbar />
    <PageWrap>
        <Pdetail>
            <div className="propertylist">
                
                <Title>1 flat to rent</Title>
                <div className="carousel">
                    <AwesomeSlider>
                        <div><img src={Pimg1} alt="" /></div>
                        <div><img src={Pimg2} alt="" /></div>
                        <div><img src={Pimg3} alt="" /></div>
                        <div><img src={Pimg4} alt="" /></div>                    
                    </AwesomeSlider>
                </div>

                <div className="details-cover">
                    <div className="details">
                        <h3 className="p-price"><FaPoundSign className="pounds" /> 1,320</h3>
                        <div className="h-detail-cover">
                            <span className="h-detail"><FaBath className="h-iconba" /> <span>2 Baths</span></span>
                            <span className="h-detail"><MdKingBed className="h-iconbe" /><span>1 Bed</span></span>
                            <span className="h-detail"><MdChair className="h-iconch" /><span>1 Reception</span></span>
                        </div>

                    </div>

                </div>

                <Map />
                <Title>Description</Title>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet dui et neque hendrerit malesuada. Nunc sit amet turpis auctor, ultrices quam vel, eleifend turpis. In egestas consequat velit et molestie. In hac habitasse platea dictumst. Fusce tristique tempor nisi id commodo. Aliquam at augue quam. Aenean id urna tincidunt, suscipit ante non, sodales purus. Duis magna nulla, gravida sed risus vel, congue condimentum dolor. Pellentesque nec augue consequat, pulvinar ipsum sit amet, mollis nulla.</p>
                <p className="date">Date Listed: 12th July, 2022</p>
            </div>

            <div className="adsandothers">
            <Title>Featured</Title>
            <Propertysmall />
            
            <Propertysmall />
            </div>
        </Pdetail>

    </PageWrap>
    
    <Footer />
        <ScrollToTop />
    </>
  );
}

export default Propertydetail;