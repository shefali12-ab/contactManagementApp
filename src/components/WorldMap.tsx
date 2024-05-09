import { Marker, Popup } from "react-leaflet"
import L from 'leaflet';
import markerIcon from '../assets/marker_icon.png';
const WorldMap=(countries:any)=>{

  const {countriesData}=countries
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30]
  });
  // console.log("This",countriesData)

    return(
        <div >
               {countriesData?.map((country : any) => (
            <Marker
              icon={customMarker}
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>
                    Active Cases: {country.active} <br />
                    Recovered Cases: {country.recovered} <br />
                    Deaths: {country.deaths}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </div>
    )
}
 

export default WorldMap