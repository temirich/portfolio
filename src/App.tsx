import React from 'react'
import Card from './components/card/card'

function App () {
  return (
    <div className="App">
      <Card width='200px' height='200px' onClick={(num) => console.log('Click', num)}/>
    </div>
  )
}

export default App
