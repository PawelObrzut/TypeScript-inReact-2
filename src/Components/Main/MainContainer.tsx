import { PuppieData } from "../../types";
import './MainContainer.css';
import Edit from '../Edit/Edit'
import { useState } from "react";

interface MainContainerProps {
  puppies: PuppieData[]
  deletePuppy: (id: string) => void
}

const MainContainer = ({ puppies, deletePuppy }: MainContainerProps) => {
  const [activeForm, setActiveForm] = useState(false)
  
  return (
    <>
      <ul className="mainContainer">
        {puppies.map((puppy: PuppieData) => (
          <li className="mainContainerItem" key={puppy.id}>
              <p>Id: {puppy.id}</p>
              <p> Name: {puppy.name}</p>

              <button 
                onClick={event => {
                  event.stopPropagation();
                  setActiveForm(activeForm => !activeForm)
                }}>Edit</button>

              <button 
                onClick={event => {
                  event.stopPropagation();
                  deletePuppy(puppy.id)
                }}>Remove</button>
          </li>
        ))}
      </ul>
      <Edit active={activeForm} setActiveForm={setActiveForm}/>
    </>
  )
}

export default MainContainer