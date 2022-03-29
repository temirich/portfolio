import React from 'react'
import styled from 'styled-components'
import CardForecast from './components/cardsForecast/cardsForecast'
import TitleForecast from './components/titleForecast/titleForecast'

const AppStyle = styled.div`
  text-align: center;
  background: blue;
`

function App () {
  return (
    <AppStyle>
      <TitleForecast />
      <CardForecast />
    </AppStyle>
  )
}

export default App
