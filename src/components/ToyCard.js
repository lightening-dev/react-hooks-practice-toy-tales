import React from "react";

function ToyCard({id, name, image, likes, handleToyDelete}) {

  function handleDonate() {

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'})
      .then((r) => r.json())
    .then((toy) => handleToyDelete(toy));
}

  

  return (
    <div id={id} className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
