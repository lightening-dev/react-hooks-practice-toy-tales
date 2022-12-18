import React from "react";

function ToyCard({id, name, image, likes, handleToyDelete, handleLikeClick}) {

  function handleDonate() {

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'})
      .then((r) => r.json())
    .then((toy) => handleToyDelete(id));
}
  
function handleLike() {
      
  const updateLikeObj = {
    likes: likes + 1,
  }

  fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateLikeObj),
    })
    .then((response) => response.json())
    .then((data) => handleLikeClick(data)) 
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
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
