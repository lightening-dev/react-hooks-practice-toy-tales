import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData}) {

  const toys = toyData.map((eachToy) => {
    return ( 
      <ToyCard 
      id ={eachToy.id}
      name={eachToy.name}
      image={eachToy.image}
      likes={eachToy.likes}/>
    )
  })
  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
