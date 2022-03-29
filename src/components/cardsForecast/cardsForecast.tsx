import React from 'react'
import { CardsForecast } from './cardsForecast.style'
import LeftCardForecast from './leftCardForcast/leftCardForcast'
import RightCardForecast from './rightCardForecast/rightCardForcast'

function CardForecast () {
  return (
    <CardsForecast>
      <LeftCardForecast />
      <RightCardForecast />
    </CardsForecast>
  )
}

export default CardForecast
