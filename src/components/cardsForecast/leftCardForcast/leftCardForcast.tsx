import React from 'react'
import { LeftCardForecastStyle } from './leftCardForcast.style'
import LeftCardSelector from './LeftCardSelector/LeftCardSelector'
import LeftCardTitle from './leftCardTitle/leftCardTitle'
import WithoutCityData from './withoutCityData/withoutCityData'

function LeftCardForecast () {
  return (
    <LeftCardForecastStyle>
      <LeftCardTitle />
      <LeftCardSelector />
      <WithoutCityData />
    </LeftCardForecastStyle>
  )
}

export default LeftCardForecast
