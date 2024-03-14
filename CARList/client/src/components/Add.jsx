import React, { useState } from "react";

function Add(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <input
      className="mark"  
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
      className="description"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
     
      <input
      className="img"
        type="url"
        placeholder="img"
        onChange={(e) => setImg(e.target.value)}
      />
      <input
      className="price"

        type="number"
        placeholder="price"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="add" onClick={()=>props.func({name,description,img,number})}>Send</button>
    </div>
  );
}

export default Add;