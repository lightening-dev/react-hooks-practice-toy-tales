import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, setToyData,}) {
    
    
 
  
  

  
  
    const toys = toyData.map((eachToy) => {
    
    
    
      return ( 
      <ToyCard 
      id ={eachToy.id}
      name={eachToy.name}
      image={eachToy.image}
      likes={eachToy.likes}
      handleToyDelete={handleToyDelete}
      handleLikeClick={handleLikeClick}
      />
    )
  })

  function handleLikeClick(data) {
      const updatedToyLike = toyData.map((eachToy) => {
        if (eachToy.id === data.id) {
          return data;
        }
        return eachToy;
        }) 
        setToyData(updatedToyLike);
  }

  function handleToyDelete(id) {
    const updatedToys = toyData.filter((eachToy) => eachToy.id !== id);
    setToyData(updatedToys);
  }
  return (
    <div id="toy-collection">{toys}</div>
  );
}


export default ToyContainer;
