import { useEffect, useState } from "react";
import { PuppieData } from "./types";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";

const App = () => {
  const [puppies, setPuppies] = useState<PuppieData[]>()

  useEffect(() => {
    fetch('http://localhost:8080/api/puppies/', {
      method: 'GET',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => setPuppies(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Header title="Puppies API with TypeScript"/>
      <MainContainer puppies={puppies}/>
    </div>
  );
}

export default App;
