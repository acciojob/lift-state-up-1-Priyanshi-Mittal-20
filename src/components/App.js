
import React from "react";
import './../styles/App.css';
import State from "./State";
import { useState } from "react";

const App = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <State showModal={showModal} setShowModal={setShowModal} />
        {
          showModal &&
          <>
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          </> 
        }
    </div>
  )
}

export default App
