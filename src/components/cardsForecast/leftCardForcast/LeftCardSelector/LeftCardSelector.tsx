import React, { useState } from 'react'
import { LeftCardSelectorStyle } from './LeftCardSelector.style'
import arrow2 from '../../../assets/icons/16/chevron-bottom.png'
import arrow from '../../../assets/icons/16/chevron-top.png'

function LeftCardSelector () {
  const [state, changeState] = useState(0)
  const [currentValue, changeValue] = useState('Select city')
  const data = [
    { id: 1, value: 'React1' },
    { id: 2, value: 'React2' },
    { id: 3, value: 'React3' },
    { id: 4, value: 'React4' },
    { id: 5, value: 'React5' },
    { id: 6, value: 'React6' },
    { id: 7, value: 'React7' },
    { id: 8, value: 'React8' },
    { id: 9, value: 'React9' }
  ]
  const items = data.map(item => {
    return (
      <li onClick = {() => { changeValue(item.value); changeState(state + 1) }} className="selectItem" key={item.id}> {item.value} </li>
    )
  })
  return (
    <LeftCardSelectorStyle>
     <div className='selectInput '>
       {currentValue}
       <img onClick = {() => { state ? changeState(state + 1) : changeState(state - 1) }} src={state ? arrow : arrow2} />
     </div>
     <div className={state ? 'selectMenu' : 'selectMenu2'}>
       <ul className='selectList'>
         {items}
       </ul>
     </div>
    </LeftCardSelectorStyle>
  )
}

export default LeftCardSelector
