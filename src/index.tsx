import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'

const DeleteHTMLStyles = styled.div`
  h1{
    margin: 0;
    padding: 0;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
  *::-webkit-scrollbar{
    width: 8px;
  }
 
  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #8083A4;

}
`

ReactDOM.render(
  <React.StrictMode>
    <DeleteHTMLStyles>
     <App />
    </DeleteHTMLStyles>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
