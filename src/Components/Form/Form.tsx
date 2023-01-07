import React, { MouseEvent, useRef } from 'react'
import './Form.css';

interface FromProps {
  addNewPuppy: (name: string | undefined, breed: string | undefined, birthDate: string | undefined) => void
}

const Form = ({ addNewPuppy }: FromProps) => {
 
  const inputName = useRef<HTMLInputElement>(null)
  const inputBreed = useRef<HTMLInputElement>(null)
  const inputBirthDate = useRef<HTMLInputElement>(null)
  const inputForm = document.querySelector<HTMLFormElement>('.inputForm');
  
  const handleSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = inputName.current?.value;
    const breed =  inputBreed.current?.value
    const birthDate = inputBirthDate.current?.value
    addNewPuppy(name, breed, birthDate);
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
      <input className="inputFormSubmit" type="submit" value="Register New Puppy" onClick={handleSubmit} />
    </form>
  )
}

export default Form
