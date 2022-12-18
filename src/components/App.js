import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] =useState([]);
  const [likes, setLikes] = useState(0);


  useEffect(() => { 
    fetch('http://localhost:3001/toys')
    .then((response) => response.json())
    .then((data) => setToyData(data))
  
  }, []);



 

 // console.log(toyData);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(toy) {
        
    
    
    setToyData(...toyData, toy);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer likes={likes} setLikes={setLikes} setToyData={setToyData}toyData={toyData}/>
    </>
  );
}

export default App;
