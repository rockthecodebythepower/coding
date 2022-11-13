import React from 'react'

const HeroeDetail = ({ heroe }) => {
  return (
    <>
      <h3>name: {heroe.name}</h3>
      <p>alias: {heroe.alias}</p>
      <p>age: {heroe.age}</p>
    </>
  )
}

export default HeroeDetail