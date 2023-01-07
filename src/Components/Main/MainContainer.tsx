import { PuppieData } from "../../types";
import './MainContainer.css';

interface MainContainerProps {
  puppies: PuppieData[]
  deletePuppy: (id: string) => void
}

const MainContainer = ({ puppies, deletePuppy }: MainContainerProps) => {
  
  return (
    <ul className="mainContainer">
      {puppies.map((puppy: PuppieData) => (
        <li className="mainContainerItem" key={puppy.id}>
            <p>Id: {puppy.id}</p>
            <p> Name: {puppy.name}</p>
            <button>Edit</button>
            <button onClick={event => {
              event.stopPropagation();
              deletePuppy(puppy.id)
            }}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default MainContainer