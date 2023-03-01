import React from 'react'

const Card = (props) => {
  return (
    <div className="upgrade">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button>{props.cost}</button>
    </div>
  )
}

export default Card