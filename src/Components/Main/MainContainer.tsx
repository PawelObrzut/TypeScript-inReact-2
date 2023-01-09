import { PuppieData } from "../../types";
import './MainContainer.css';
import Edit from '../Edit/Edit'
import { useState } from "react";

interface MainContainerProps {
  puppies: PuppieData[]
  deletePuppy: (id: string) => void
  updatePuppy: ({ id, name, breed, birthDate }: PuppieData) => void
}

const MainContainer = ({ puppies, deletePuppy, updatePuppy }: MainContainerProps) => {
  const [activeForm, setActiveForm] = useState(false)

  const [editPuppy, setEditPuppy] = useState({
    id: "",
    name: "",
    breed: "",
    birthDate: "",
  })
  
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
                  setEditPuppy({
                    id: puppy.id,
                    name: puppy.name,
                    breed: puppy.breed,
                    birthDate: puppy.birthDate
                  })
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
      <Edit updatePuppy={updatePuppy} active={activeForm} editPuppy={editPuppy} setEditPuppy={setEditPuppy} setActiveForm={setActiveForm}/>
    </>
  )
}

export default MainContainer