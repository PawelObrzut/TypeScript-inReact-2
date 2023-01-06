import React from 'react'
import './Form.css';

const Form = () => {
  const inputForm = document.querySelector<HTMLFormElement>('.inputForm');
  const name = document.querySelector<HTMLInputElement>('#name');
  const breed = document.querySelector<HTMLInputElement>('#breed');
  const birthData = document.querySelector<HTMLInputElement>('#dateOfBirth')
  
  return (
    <form className="inputForm">
      <label className="labelForm" htmlFor="name">Name</label>
      <input className="inputFormText" type="text" id="name" />
      <label className="labelForm" htmlFor="breed">Breed</label>
      <input className="inputFormText" type="text" id="breed" />
      <label className="labelForm" htmlFor="dateOfBirth">Date of Birth</label>
      <input className="inputFormText" type="text" id="dateOfBirth" />
      <input className="inputFormSubmit" type="submit" value="Register a New Puppy"/>
    </form>
  )
}

export default Form
