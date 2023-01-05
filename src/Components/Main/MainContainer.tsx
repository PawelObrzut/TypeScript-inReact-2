import { PuppieData } from "../../types";
import './MainContainer.css';

interface MainContainerProps {
  puppies: PuppieData[]
}

const MainContainer = ({ puppies }: MainContainerProps) => {
  return (
    <ul className="mainContainer">
      {puppies.map((puppy: PuppieData) => (
        <li className="mainContainerItem" key={puppy.id}>
            <p>Id: {puppy.id}</p>
            <p> Name: {puppy.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default MainContainer