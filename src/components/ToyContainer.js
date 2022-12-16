import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setToyData}) {
    
  
  
    const toys = toyData.map((eachToy) => {
    return ( 
      <ToyCard 
      id ={eachToy.id}
      name={eachToy.name}
      image={eachToy.image}
      likes={eachToy.likes}
      handleToyDelete={handleToyDelete}/>
    )
  })

  function handleToyDelete(toy) {
    const updatedToys = toyData.filter((eachToy) => eachToy.id !== toy.id);
    setToyData(updatedToys);
    
    }
  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
