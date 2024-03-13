import React, { useState } from "react";

export default function AddPost(props) {
  const [products, setProducts] = useState({
    name: "",
    price: 0,
    quantity: 0,
    imgurl: "",
    categoryId: null,
  });
  const onsubmit = () => {
    console.log(products);
    props.addProduct(products);
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
      <p>name</p>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="number" name="price" onChange={handleInputChange} />
      <input type="number" name="quantity" onChange={handleInputChange} />

      <select name="categoryId" id="categoryId" onChange={handleInputChange}>
        {props.products.map((e) => {
          return <option value={e.id}>{e.name}</option>;
        })}
      </select>

      <input type="text" name="imgurl" />
      <button onClick={() => onsubmit()}>Add Product</button>
    </div>
  );
}
// import React, { useState } from "react";

// function Add(props) {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="description"
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button onClick={()=>props.func({name:name,description:description})}>Send</button>
//     </div>
//   );
// }

// export default Add;