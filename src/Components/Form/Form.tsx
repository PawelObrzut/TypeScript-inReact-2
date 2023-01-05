import React from 'react'

const Form = () => {
  return (
    <form>
      <label htmlFor="title">Name</label>
      <input type="text" id="name" />
      <label htmlFor="title">Breed</label>
      <input type="text" id="breed" />
      <label htmlFor="title">Date of Birth</label>
      <input type="text" id="breed" />
      <input type="submit" value="Register a New Puppy"/>
    </form>
  )
}

export default Form
