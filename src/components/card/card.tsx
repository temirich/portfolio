import React from 'react'

interface CardProps {
  width?: string
  height?: string
  onClick: (num: number) => void
}
const Card: React.FC<CardProps> = ({ width, height, onClick }) => {
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={() => { onClick(32) }}>Click!</button>
    </div>
  )
}

export default Card
