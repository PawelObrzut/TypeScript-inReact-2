import React, { MouseEvent, useRef } from 'react'
import './Form.css';

// interface FromProps {
//   handleSubmit: (event: React.MouseEventHandler<HTMLInputElement>) => void
// }

const Form = () => {
 
  const inputName = useRef<HTMLInputElement>(null)
  const inputBreed = useRef<HTMLInputElement>(null)
  const inputBirthDate = useRef<HTMLInputElement>(null)
  const inputForm = document.querySelector<HTMLFormElement>('.inputForm');
  
  const handleSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('Name ', inputName.current?.value)
    console.log('Breed ', inputBreed.current?.value)
    console.log('Date Of Birth ', inputBirthDate.current?.value)
    inputForm?.reset();
  }
 
  return (
    <form className="inputForm">
      <label className="labelForm" htmlFor="name">Name</label>
      <input className="inputFormText" type="text" id="name" ref={inputName}/> 
      <label className="labelForm" htmlFor="breed">Breed</label>
      <input className="inputFormText" type="text" id="breed" ref={inputBreed}/>
      <label className="labelForm" htmlFor="dateOfBirth">Date of Birth</label>
      <input className="inputFormText" type="text" id="dateOfBirth" ref={inputBirthDate}/>
      <input className="inputFormSubmit" type="submit" value="Register a New Puppy" onClick={handleSubmit} />
    </form>
  )
}

export default Form
