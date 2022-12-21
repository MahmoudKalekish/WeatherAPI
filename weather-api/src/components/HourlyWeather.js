// import React, { useState, useEffect } from "react";
import clear from "../weather-icons/clear.svg";
// import cloudy from "../weather-icons/cloudy.svg";
import drizzle from "../weather-icons/drizzle.svg";
import fog from "../weather-icons/fog.svg";
import mostlycloudy from "../weather-icons/mostlycloudy.svg";
import partlycloudy from "../weather-icons/partlycloudy.svg";
import rain from "../weather-icons/rain.svg";
import snow from "../weather-icons/snow.svg";
import storm from "../weather-icons/storm.svg";
// import unknown from "../weather-icons/unknown.svg";



import React from 'react';

function HourlyWeather(props) {
  function iconChoosing(num) {
    if (num < 300) {
      return storm;
    } else if (num >= 300 && num < 499) {
      return drizzle;
    } else if (num >= 500 && num < 599) {
      return rain;
    } else if (num >= 600 && num < 699) {
      return snow;
    } else if (num >= 700 && num < 799) {
      return fog;
    } else if (num === 800) {
      return clear;
    } else if (num === 801) {
      return partlycloudy;
    } else if (num > 801 && num <= 805) {
      return mostlycloudy;
    } else {
      return undefined;
    }
  }

  return (
    <>
      {console.log(iconChoosing(props.iconsArray[0]))}
      <section className="hourlyWeather">
        <section>
          <time>{props.hourlyArray[0]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[0])} width="75" alt="icon"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[0]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[1]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[1])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[1]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[2]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[2])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[2]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[3]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[3])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[3]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[4]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[4])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[4]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[5]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[5])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[5]}&#8451;</span>
        </section>
        <section>
          <time>{props.hourlyArray[6]}</time>
          <figure>
            <img src={iconChoosing(props.iconsArray[6])} width="75" alt="cat"></img>
          </figure>
          <span className="hTempValue">{props.tempArray[6]}&#8451;</span>
        </section>
       </section>
       </>
  );
}
export default HourlyWeather;