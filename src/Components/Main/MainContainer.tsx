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
    birthDate: new Date(),
    url: ""
  })
  
  return (
    <>
      <ul className="listContainer">
        {puppies.map((puppy: PuppieData, index): JSX.Element => {
          return (
            <li className="listItem " key={index}>

              <article className="listItemCard">
                <img className="listItemCardImg" src={puppy.url} alt={puppy.breed} />
                <div className="listItemCardText">
                  <h3>{puppy.name}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eum aliquid rerum tempora saepe!
                    Illum id delectus sed magnam mollitia.</p>
                    <button 
                      className="listItemCardBtn"
                      onClick={event => {
                        event.stopPropagation();
                        setEditPuppy({
                          id: puppy.id,
                          name: puppy.name,
                          breed: puppy.breed,
                          birthDate: puppy.birthDate,
                          url: puppy.url
                        })
                        setActiveForm(activeForm => !activeForm)
                      }}>Edit</button>

                    <button
                      className="listItemCardBtn"
                      onClick={event => {
                        event.stopPropagation();
                        deletePuppy(puppy.id)
                      }}>Remove</button>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      <Edit updatePuppy={updatePuppy} active={activeForm} editPuppy={editPuppy} setEditPuppy={setEditPuppy} setActiveForm={setActiveForm}/>
    </>
  )
}

export default MainContainer