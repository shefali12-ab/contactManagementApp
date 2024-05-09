import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Line } from "react-chartjs-2";
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from "react-leaflet";
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import WorldMap from  "../components/WorldMap"
const ChartsMaps = () => {
  const fetchChartData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const fetchCountryData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data: chartData, isLoading: chartLoading, isError: chartError } = useQuery('chartData', fetchChartData);
  const { data: countriesData, isLoading: countriesLoading, isError: countriesError } = useQuery('countries', fetchCountryData);

  useEffect( () => {
    fetchChartData();
    fetchCountryData();
  }, []);
 console.log(chartData)
 console.log(countriesData)

 

 ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
 if (!chartData || !countriesData) {
    return <div className='m-auto text-5xl text-blue-500'>Loading...</div>;
  }
  const newChartData = {
    labels: Object.keys(countriesData.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(countriesData.cases),
        fill: false,
        borderColor: "blue",
        tension: 0.2,
      },
    ],
  };
  return (
    <div className='w-full flex flex-col  items-center p-3 '>
      <h1 className="text-4xl font-bold mb-4 text-blue-500">Corona Cases Chart</h1>
      <div className="border-2 border-blue-500 w-[50%] m-auto 10 auto 10">
        {newChartData.datasets ? <Line data={newChartData}  /> : <h1 className="text-blue-500 mb-4 font-bold text-2xl">Loading...</h1>}
      </div>
      <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">Corona Cases World Map</h1>
      <div
        className="border-2 border-blue-500 w-[50%] m-auto 5 auto 5 h-[100%]"

      >
       <MapContainer  className="m-auto w-full h-[100%]  border-blue-700 "
          bounds={[[-60, -180], [85, 180]]} zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}>
       <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <WorldMap countriesData={chartData} />
       </MapContainer>


      </div>

    </div>
  );
};

export default ChartsMaps;
