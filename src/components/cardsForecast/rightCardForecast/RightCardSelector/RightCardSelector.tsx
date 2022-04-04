import React from 'react'
import { RightCardSelectorStyle } from './RightCardSelector.style'

function RightCardSelector () {
  return (
    <RightCardSelectorStyle>
      <select>
      </select>
      <input type="date" min="2022-04-01" max="2022-04-03">
      </input>
    </RightCardSelectorStyle>
  )
}

export default RightCardSelector
