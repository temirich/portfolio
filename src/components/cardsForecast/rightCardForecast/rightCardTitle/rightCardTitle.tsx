import React from 'react'
import styled from 'styled-components'
// import { LeftCardTitleStyle } from './leftCardTitle.style'
const RightCardTitleStyle = styled.div`
  text-align: left;
  padding-left: 58px;
  padding-top: 50px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #2C2D76;
`
function RightCardTitle () {
  return (
    <RightCardTitleStyle>
      Forecast for a Date in the Past
    </RightCardTitleStyle>
  )
}

export default RightCardTitle
