import React, {useState, useEffect} from "react";
import styledComponents from "styled-components";
import {MdArrowDropDown} from 'react-icons/md';
import Select from 'react-select';
import { Link } from "react-router-dom";

import Button from "./button";
// Utilities
import { device } from "../utilities/Breakpoints";

const Searchcover = styledComponents.div`
  width:66rem;
  padding:1rem;
  display:inline-block;
  background-color:white;
  border-radius: .2rem;
  box-shadow: 10px 5px 15px black;
  z-index:18;

  @media ${device.mobile} {
    width: calc(100% - 2rem) ;
  }

  h1{
      font-size: 3rem;
      margin-bottom:.5rem;

      @media ${device.mobile} {
        font-size:1rem;
      }
  }

  .s-type{
    border-radius: .2rem;
    overflow:hidden;
    display:inline-block;
    margin:1rem 0;
  
    button{    
        padding: .7rem;
        border:none;
        transition:.3s;
        cursor:pointer;
        font-size:1rem;

        @media ${device.mobile} {
          padding: .7rem;
          font-size:.8rem;
        }

    }

  }

  .stypeselected{
    background-color:black;
    color:white;
  }
  .stypedefault{
    background-color:lightgray;
    color:grey;
  }

  .inputbox{
      font-size:1rem;
      border:none;
      padding: .6rem;
      padding-left:0;
      width:22rem;

      @media ${device.mobile} {
        width:110%;
        border-bottom: 1px solid gray;
      }
  }

  .mainsearch-details{
      display:flex;
      justify-content: space-between;
      width:80%;

      @media ${device.mobile} {
        display: inline-block;
      }

      .bcover{
          display:flex;
          align-items:center;
      }
      
    }
  

  .opt,.opt-main{
      height:3.7rem;
  }

  .opt{
      width:9rem;
      z-index:11;

      @media ${device.mobile} {
        margin:.7rem 0;
      }

      h3{
          margin-top:.3rem;
      }
      .opt-sub{
        width:500px;
        margin-top:2rem;
        display:flex;
        justify-content:space-between;
        padding:1rem 1rem;
        background-color:white;
        border-radius: .2rem;
        box-shadow: 10px 5px 15px black;
        z-index:11;

        @media ${device.mobile} {
          flex-direction:column;
          position:absolute;
          width: 65%;
        }

        .opt-1{
            width:100%;

            @media ${device.mobile} {
              width: 100%;
            }
            p{
                margin:.2rem 0;
            }
        }
      }
  }
  


  .rot{
      transform: rotate(180deg);
      transition:.2s;
  }
  .rotnon{
    transform: rotate(0deg);
    transition:.2s;
  }


  .basic-single{
      width:100%;
  }


  .select__input-container{
      display:none;
  }
`;

function Searchbox() {
    const [sType, setStype] = useState("sale");
    const [title, setTitle] = useState("");
    const [bedsVisib, setbedsVisib] = useState(false);
    const [pVisib, setpVisib] = useState(false);
    const [bedmin, setBedmin] = useState("");
    const [bedmax, setBedmax] = useState("");
    const [beddisp, setBeddisp] = useState("");

    
    const [pricemin, setPricemin] = useState("");
    const [pricemax, setPricemax] = useState("");
    const [pricedisp, setPricedisp] = useState("");

    


    const changeStypeRent = () => {
        setStype("rent");
    };

    const changeStypeSale = () => {
        setStype("sale");
    };


    const bedVisible = () => {
        setbedsVisib(true);
    }
    const bednotVisible = () => {
        setbedsVisib(false);
    }

    const pVisible = () => {
        setpVisib(true);
    }
    const pnotVisible = () => {
        setpVisib(false);
    }


      const optionsmin = [
        { value: 'All', label: 'All' },
        { value: 0, label: '0' },
        { value: 1, label: '1' },
      ]

      const optionsmax = [
        { value: 'All', label: 'All' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: '10+', label: '10+' },
      ]

      const handlebedMin = (bedmin) => {
        setBedmin(bedmin);
      };

      const handlebedMax = (bedmax) => {
        setBedmax(bedmax);
      };

      const handlepMin = (pricemin) => {
        setPricemin(pricemin);
      };

      const handlepMax = (pricemax) => {
        setPricemax(pricemax);
      };

      const optionsprice = [
        { value: 'All', label: 'All' },
        { value: '10,000', label: '10k' },
        { value: '20,000', label: '20k' },
        { value: '30,000', label: '30k' },
        { value: '40,000', label: '40k' },
        { value: '50,000', label: '50k' },
        { value: '60,000', label: '60k' },
        { value: '70,000', label: '70k' },
        { value: '80,000', label: '80k' },
        { value: '90,000', label: '90k' },
        { value: '100,000+', label: '100k+' },
      ]


         

          useEffect(() => {    

            if(bedmax && bedmin) {
                setBeddisp(`${bedmin.value} - ${bedmax.value} beds`);
              } else if(bedmax && !bedmin) {
                setBeddisp(`${bedmax.value} beds max`);
              } else if(!bedmax && bedmin) {
                setBeddisp(`${bedmin.value} beds min`);
              } else if(!bedmax && !bedmin){
                  setBeddisp("All beds");
              } else if(bedmax.value === "All" && bedmin === "All"){
                  setBeddisp("All beds");
              }


              if(pricemin && pricemax) {
                setPricedisp(`${pricemin.label} - ${pricemax.label}`);
              } else if(pricemax && !pricemin) {
                setPricedisp(`${pricemax.label} max`);
              } else if(!pricemax && pricemin) {
                setPricedisp(`${pricemin.label} min`);
              } else if(!pricemax && !pricemin){
                setPricedisp("All prices");
              } else if(pricemax.value === "All" && pricemin === "All"){
                setPricedisp("All");
              }

          },[bedmin, bedmax, pricemax, pricemin]);
              


        // Select Theme
  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "white",
      primary: "black",
    },
  });
      

  return (
    <>
        <Searchcover>
            <h1>Search for Houses here.</h1>
            <div className="mainsearch">
                <div className="s-type">
                    <button className={sType === "sale" ? "stypeselected" : "stypedefault"} onClick={changeStypeSale}>For sale</button>
                    <button className={sType === "rent" ? "stypeselected" : "stypedefault"} onClick={changeStypeRent}>To rent</button>
                </div>
                <br/>
                <div className="mainsearch-details">
                <div className="opt-main">  
                    <p>Search for area</p>  
                    <input
                    className="inputbox"
                    type="text"
                    placeholder="Example: 3 bedroom flat in Lekki, with standard facilities"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div className="opt" onMouseOver={bedVisible} >
                    <div onMouseLeave={bednotVisible}>
                    <p>Bedrooms</p>
                    <h3>{beddisp}
                        <MdArrowDropDown className={bedsVisib ? 'rot' : 'rotnon'} /></h3>
                    <div className="opt-sub" style={{display: bedsVisib ? "flex" : "none"}}>
                        <div className="opt-1">
                            <p>Minimum beds</p>
                            <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Any"
                            options={optionsmin}
                            value={bedmin}
                            onChange={handlebedMin}
                            theme={theme}
                            />
                        </div>
                        <div className="opt-1">
                            <p>Maximum beds</p>
                            
                            <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Any"
                            options={optionsmax}
                            value={bedmax}
                            onChange={handlebedMax}
                            theme={theme}
                            />
                        </div>
                        
                    </div>
                    </div>
                </div>


                <div className="opt" onMouseOver={pVisible} >
                    <div onMouseLeave={pnotVisible}>
                    <p>Price</p>
                    <h3>{pricedisp}
                        <MdArrowDropDown className={pVisib ? 'rot' : 'rotnon'} /></h3>
                    <div className="opt-sub" style={{display: pVisib ? "flex" : "none"}}>
                        <div className="opt-1">
                            <p>Minimum price</p>
                            <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Any"
                            options={optionsprice}
                            value={pricemin}
                            onChange={handlepMin}
                            theme={theme}
                            />
                        </div>
                        <div className="opt-1">
                            <p>Maximum price</p>
                            
                            <Select
                            className="basic-single"
                            classNamePrefix="select"
                            placeholder="Any"
                            options={optionsprice}
                            value={pricemax}
                            onChange={handlepMax}
                            theme={theme}
                            />
                        </div>
                        
                    </div>
                    </div>
                </div> 
                <div className="bcover"><Link to="/properties"><Button>Search</Button></Link></div>
                
                </div>
            </div>
        </Searchcover>
        
        
    </>
  );
}

export default Searchbox;