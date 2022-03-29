import React from 'react'
import styled from 'styled-components'
import picture from '../../../assets/Placeholder/1.png'

const WithoutCityDataStyle = styled.div`
  margin: 0 auto;
  width: 438px;
  height: 212px;
  display: block;
`
const WithoutCityDataImgStyle = styled.div`
  img {border: 1px dashed #8083A4;}
  
`
const WithoutCityDataTextStyle = styled.div`
  margin-top: 30px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #8083A4;
`

function WithoutCityData () {
  return (
    <WithoutCityDataStyle>
      <WithoutCityDataImgStyle>
        <img src={picture}></img>
      </WithoutCityDataImgStyle>
      <WithoutCityDataTextStyle>
        Fill in all the fields and the weather will be displayed
      </WithoutCityDataTextStyle>
    </WithoutCityDataStyle>
  )
}

export default WithoutCityData
