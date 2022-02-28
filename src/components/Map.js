import React from "react";
import styled from "styled-components";

const Mapcover = styled.div`
  border: none;
  border-radius: .2rem; 
  margin-top:1rem;
`;

function Map(props) {
  //const {location} = props;
let location = 'Abbey wood, London';
        
  return (
    <div>
      <Mapcover>
      <div style={{ marginBottom: "-.2rem", width: "100%", overflow:"hidden" }}>
        <iframe
          width="100%"
          height="336"
          frameBorder="0"
          title="map"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?width=100%25&height=336&hl=en&q=%20${location}&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
        ></iframe>
      </div>
      </Mapcover>
    </div>
  );
}

export default Map;
