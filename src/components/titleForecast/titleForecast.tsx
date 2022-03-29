import React from 'react'
import styled from 'styled-components'

const WeatherForecast = styled.div`
  margin: 0 auto;
  display: block;
  margin-top: 65px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  color: #000000;
  h1 {
    margin: 0 auto;
    font-size: 102px;
    line-height: 122px;
    font-weight: 700;
  }
 `

function TitleForecast () {
  return (
    <WeatherForecast>
      <h1>Weather</h1>
      <h1 id="1">forecast</h1>
    </WeatherForecast>
  )
}

export default TitleForecast
