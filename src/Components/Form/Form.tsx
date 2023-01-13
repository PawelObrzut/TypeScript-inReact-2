import React, { MouseEvent, useRef, useState } from 'react'
import './Form.css';

interface FromProps {
  addNewPuppy: (name: string | undefined, breed: string | undefined, birthDate: string | undefined) => void
}

const Form = ({ addNewPuppy }: FromProps) => {
  const breedList: string[] = [
    '',
    'Buldog', 
    'Chow chow', 
    'Poodle', 
    'Husky', 
    'Dalmatian', 
    'Doberman', 
    'Golden Retriever', 
    'Pug'
  ];
 
  const [breed, setBreed] = useState('');
  const inputName = useRef<HTMLInputElement>(null)
  const inputBirthDate = useRef<HTMLInputElement | null>(null)
  const inputForm = document.querySelector<HTMLFormElement>('.inputForm');

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setBreed(() => event.target.value);
  }
  
  const handleSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = inputName.current?.value;
    const birthDate = inputBirthDate?.current?.value.toString()
    addNewPuppy(name, breed, birthDate);
    inputForm?.reset();
  }

  const breedOption = (options: string[]): JSX.Element[] => {
    return options.map(option => (
      <option key={option} value={option} >{option}</option>
    ))
  }
 
  return (
    <form className="inputForm">
      <label className="labelForm" htmlFor="name">Name</label>
      <input className="inputFormText" type="text" id="name" ref={inputName}/> 
      <label className="labelForm" htmlFor="breed">Breed</label>
      <select className="inputFromSelect" onChange={selectHandler}>
        {breedOption(breedList)}
      </select>
      <label className="labelForm" htmlFor="dateOfBirth">Date of Birth</label>
      <input className="inputFormText" type="date" id="dateOfBirth" ref={inputBirthDate} />
      <input className="inputFormSubmit" type="submit" value="Register New Puppy" onClick={handleSubmit} />
    </form>
  )
}

export default Form
