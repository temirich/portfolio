import React from 'react'
import { AppStyle, Container } from './App.style'
import CardForecast from './components/cardsForecast/cardsForecast'
import TitleForecast from './components/titleForecast/titleForecast'

function App () {
  return (
    <AppStyle>
      <Container>
        <TitleForecast />
        <CardForecast />
      </Container>
    </AppStyle>
  )
}

export default App
