import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const latitude = 26.000517; // Replace with the latitude from your map link
  const longitude = 83.5670363;
  return (
    <div className="mt-100 property-details-google-map mb-100 pb-90">
 <Map
      google={props?.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: latitude, // Replace with the latitude from your map link
        lng: longitude, // Replace with the longitude from your map link
      }}
    /></div>
   
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCsEaI7E7GZukUahbG-ZNhcBdWUsrEcf9c', // Replace with your actual API key
})(GoogleMap);
