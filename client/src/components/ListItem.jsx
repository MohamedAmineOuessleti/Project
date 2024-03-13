import React, { useState } from "react";

const ListItem = (props) => {
  const [products, setProducts] = useState({
    name: props.product.name,
    price: props.product.price,
    quantity: props.product.quantity,
    imgurl: props.product.imgurl,
    categoryId: props.product.categoryId,
  });
  const onsubmit = () => {
    console.log(products);
    props.updateProduct(props.product.id, products);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducts((products) => ({
      ...products,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>name: {props.product.name}</h1>
      <p>price :{props.product.price}</p>
      <p>qtq:{props.product.quantity}</p>
      <img src={props.product.imgurl} alt="" />
      <button onClick={() => props.deleteProduct(props.product.id)}>
        delete
      </button>
      <div>
        <p>name</p>
        <input type="text" name="name" onChange={handleInputChange} />
        <input type="number" name="price" onChange={handleInputChange} />
        <input type="number" name="quantity" onChange={handleInputChange} />


        <input type="text" name="imgurl" />
        <button onClick={() => onsubmit()}>Update product</button>
      </div>
    </div>
  );
};

export default ListItem;
// import React,{useState} from 'react'

// function ListItem(props) {
//     const [name, setName] = useState(props.car.name);
//   const [description, setDescription] = useState(props.car.description);
//   return (
//     <div>
//         <h1>{props.car.name}</h1>
//         <p>{props.car.description}</p>
//         <button onClick={()=>props.fn(props.car._id)}>Delete</button>
//         <input
//         type="text"
//         defaultValue={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         defaultValue={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//         <button onClick={()=>props.update(props.car._id,{name:name,description:description})}>Update</button>
        
//     </div>
//   )
// }

// export default ListItem