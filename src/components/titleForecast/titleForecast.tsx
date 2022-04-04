import React from 'react'
import styled from 'styled-components'

const WeatherForecast = styled.section`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  padding-top: 65px;
  width: 775px;
  height: 212px;
  margin: 0 auto;
  margin-bottom: 60px;
  h1 {

    font-size: 102px;
    line-height: 122px;
    font-weight: 700;
  }
  #secondHeader{
    padding-left: 369px;
  }
 `

function TitleForecast () {
  return (
      <WeatherForecast>
        <h1>Weather</h1>
        <h1 id="secondHeader">forecast</h1>
      </WeatherForecast>
  )
}

export default TitleForecast
