import './Edit.css'

interface EditContainerProps {
  active: boolean
  setActiveForm: (status: boolean) => void
}

const Edit = ({active, setActiveForm} : EditContainerProps) => {
  const handleCancel = () => {
    setActiveForm(false)
  }

  return (active) ? (
    <section className="editPuppy">
      <form className="editPuppyForm">
        <label className="editFormLabel">ID</label>
        <input className="editFormInput" type="text" value="UUID4-UNIQUE-CODE" disabled/>
        <label className="editFormLabel">Name</label>
        <input className="editFormInput" type="text" /> 
        <label className="editFormLabel">Breed</label>
        <input className="editFormInput" type="text" />
        <label className="editFormLabel">Date of Birth</label>
        <input className="editFormInput" type="text"/>

        <button className="editPuppyFormBtn" onClick={handleCancel}>Cancel</button>
        <button className="editPuppyFormBtn">Update</button>
      </form>
    </section>
  ) : <></>
}

export default Edit