import React from 'react'
import { useState } from 'react'

const State = ({showModal,setShowModal}) => {
  function handleClick()
  {
    setShowModal(true)
  }
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Show Modal</button>
    </div>
  )
}

export default State
