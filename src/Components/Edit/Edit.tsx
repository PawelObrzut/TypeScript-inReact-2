import { ChangeEvent, MouseEvent } from 'react';
import './Edit.css'
import { PuppieData } from "../../types";

interface EditContainerProps {
  active: boolean
  setActiveForm: (status: boolean) => void
  setEditPuppy: ({id, name, breed, birthDate}: PuppieData) => void
  editPuppy: PuppieData
  updatePuppy: ({ id, name, breed, birthDate }: PuppieData) => void
}

const Edit = ({active, setActiveForm, editPuppy, setEditPuppy, updatePuppy} : EditContainerProps) => {
  const handleCancel = () => {
    setActiveForm(false)
  }

  const handleUpdate = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    updatePuppy(editPuppy);
    setActiveForm(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setEditPuppy({
      ...editPuppy,
      [event.target.name]: event.target.value
    })
  }

  return (active) ? (
    <section className="editPuppy">
      <form className="editPuppyForm">
        <label className="editFormLabel">ID</label>
        <input className="editFormInput" type="text" value={editPuppy.id} disabled name="id" />
        <label className="editFormLabel">Name</label>
        <input className="editFormInput" type="text" value={editPuppy.name} name="name" onChange={handleChange} /> 
        <label className="editFormLabel">Breed</label>
        <input className="editFormInput" type="text" value={editPuppy.breed} name="breed" onChange={handleChange} />
        <label className="editFormLabel">Date of Birth</label>
        <input className="editFormInput" type="text" value={editPuppy.birthDate} name="birthDate" onChange={handleChange} />

        <button className="editPuppyFormBtn" onClick={handleCancel}>Cancel</button>
        <button className="editPuppyFormBtn" onClick={handleUpdate}>Update</button>
      </form>
    </section>
  ) : <></>
}

export default Edit