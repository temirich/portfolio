import React from 'react'
import { RightCardForecastStyle } from './rightCardForcast.style'
import RightCardSelector from './RightCardSelector/RightCardSelector'
import RightCardTitle from './rightCardTitle/rightCardTitle'
import WithoutCityData from './withoutCityData/withoutCityData'

function RightCardForecast () {
  return (
    <RightCardForecastStyle>
      <RightCardTitle />
      <RightCardSelector />
      <WithoutCityData />
    </RightCardForecastStyle>
  )
}

export default RightCardForecast
