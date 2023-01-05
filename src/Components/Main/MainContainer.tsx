import React from 'react'
import { PuppieData } from "../../types";

interface MainContainerProps {
  puppies: PuppieData[]
}

const MainContainer = ({ puppies }: MainContainerProps) => {
  return (
    <ul>
      {puppies.map(puppy => (
        <li key={puppy.id}>
          {puppy.name}
        </li>
      ))}
    </ul>
  )
}

export default MainContainer