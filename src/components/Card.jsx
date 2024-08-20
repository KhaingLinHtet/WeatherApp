/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { WiDayCloudy,WiHail  } from "react-icons/wi";

const Card = ({data}) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if(JSON.stringify(data) !== '{}'){

    return (
      <div className='d-flex flex-column align-items-center mt-4'>
        <p>Current time:</p>
         <Clock value={value} />
        <h2>{data.name}, {data.sys.country}</h2>
        <h1><img src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`}/>  {data.main.temp} C</h1>
        <p>{data.weather[0].main}</p>
        <p>Humidity: {data.main.humidity} %</p>
        <p>Visivility: {data.visibility /1000}km</p>
  
      </div>
    )
  }else{
    return (<h1 className='text-center'>Loading.....</h1>) 
  }

  
}

export default Card
