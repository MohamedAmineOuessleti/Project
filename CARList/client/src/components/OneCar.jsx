import React,{useState} from 'react'

function OneCar(props) {
    const [name, setName] = useState(props.car.name);
  const [description, setDescription] = useState(props.car.description);
  const [price, setNumber] = useState(props.car.number);
  return (
    <div>
        <h1>{props.car.name}</h1>
        <h3>{props.car.img}</h3>
        <h3>{props.car.number}</h3>
        <p>{props.car.description}</p>

        <button onClick={()=>props.fn(props.car._id)}>Delete</button>
        <input
        type="text"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        defaultValue={price}
        onChange={(e) => setNumber(e.target.value)}
      />
        <button onClick={()=>props.update(props.car._id,{name:name,description:description,price:price})}>Update</button>
        
    </div>
  )
}

export default OneCar