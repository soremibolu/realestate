import React, {useState} from "react";
import PageWrap from "../components/pagewrap";
import Navbar from '../components/navbar';
import Propertysub from "../components/property";
import Propertysmall from "../components/propertysmall";
import styledComponents from "styled-components";
import Title from "../components/title";
import Searchboxsm from "../components/searchboxsmall";
import Select from 'react-select';
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/footer";
// Utilities
import { device } from "../utilities/Breakpoints";

const PropertyCover = styledComponents.div`
display:flex;
justify-content:space-between;

.propertylist{
  width:100%;
}
.adsandothers{
    width:18rem ;
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

    @media ${device.mobile} {
      width:100%;
      margin-bottom:5rem;
      flex-direction: column;
    }

    .filter{
        width:10rem;
        height:auto;
        display:flex;
        align-items:center;

        @media ${device.mobile} {
          margin-bottom:1rem;
          position:absolute;
          margin-top:5rem;
          z-index:10;
        }

        .basic-single{
            width:100%;
        }
    }
}

`;

function Propertieslist() {
    
    const [filt, setFilt] = useState("");

    const optionsfilt = [
        { value: 'Most Recent', label: 'Most Recent' },
        { value: 'Most popular', label: 'Most popular' },
        { value: 'Highest Price', label: 'Highest Price' },
        { value: 'Lowest Price', label: 'Lowest Price' },
      ]

      const handlefilt = (filt) => {
        setFilt(filt);
      };

      const theme = (theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "white",
          primary: "black",
        },
      });

      let propertieslist = [
        { title: "Well furnished flat to rent",
          location: "Abbey wood, London",
          bed:3,
          bath:2,
          reception:2,
          price: '2,111',
          date:'2nd february, 2022' 
        },
        { title: "flat for rent",
          location: "Erith, London",
          bed:1,
          bath:1,
          reception:1,
          price: '2,111',
          date:'20th february, 2022' 
        },
        { title: "2 bedroom to rent",
          location: "Elephant & Castle, London",
          bed:2,
          bath:1,
          reception:1,
          price: '2,111',
          date:'12th february, 2022' 
        },
        { title: "1 bedroom flat to rent",
          location: "Thamesmead, London",
          bed:2,
          bath:2,
          reception:1,
          price: '2,111',
          date:'27th March, 2022' 
        }
      ];

  return (
    <>
    <Navbar />
    <PageWrap>
        <div>
            <Searchboxsm />
        </div>
        <PropertyCover>
            <div className="propertylist">
            <div className="head">
                <Title>Properties</Title>
                <div className="filter">
                    <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Any"
                    options={optionsfilt}
                    value={filt}
                    onChange={handlefilt}
                    defaultValue={{ value: 'Most Recent', label: 'Most Recent' }}
                    theme={theme}
                    required
                    />
                </div>
            </div>

            {propertieslist.length !== 0 ? (
              propertieslist.map((property) => (
                <Propertysub key={property.title} propertyDetails={property} />
              ))
            ) : (
              <h2>Fetching Properties...</h2>
            )}
            
            </div>

            <div className="adsandothers">
            <Title>Featured</Title>
            <Propertysmall />
            
            <Propertysmall />
            </div>
        </PropertyCover>

    </PageWrap>
    <Footer />
    <ScrollToTop />

    </>
  );
}

export default Propertieslist;