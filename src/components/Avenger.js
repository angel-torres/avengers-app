import React, { Component } from 'react'

export default function Avenger(props) {
  const userId = props.match.params.userId;
  const avenger = props.avengers.find( avenger => `${avenger.id}` === userId)
  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name}/>
      <h1>{avenger.name}</h1>
      <h4>{avenger.nickname}</h4>
      <p>{avenger.description}</p>
    </div>
  )
  
}
