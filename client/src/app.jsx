import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import CarList from "./components/List.jsx"
import Add from "./components/Add.jsx"
const App = () => {
const [cars,setCars]=useState([])
const [updater,setUpdater]=useState(false)



const fetch =()=>{
  axios.get("http://localhost:3000/api/get")
  .then((response)=>setCars(response.data))
  .catch((error)=>console.error(error))
}

useEffect(()=>{
  fetch()
},[updater])

const addCar=(obj)=>{
  axios.post("http://localhost:3000/api/post",obj)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}
const deleteCar=(id)=>{
  console.log(id,'idd')
  axios.delete(`http://localhost:3000/api/post${id}`)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}

const updateCar=(id,obj)=>{
  axios.put(`http://localhost:3000/api/post${id}`,obj)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}


  return (
    <div>
      <h1>Car List</h1>
      <Add func={addCar}/>
      <CarList data={cars} fn={deleteCar} update={updateCar}/>
     {/* {
      data.map((element)=>(
        <div>
        <h1>{element.name}</h1>
        <p>{element.description}</p>
        </div>
      ))
     } */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))





























// import React from 'react'
// import { useState,useEffect } from 'react';
// // import AddPost from './components/AddPost';
// // import CarList from './components/carList';
// import Car from './comp/Car';

// const App = () => {
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [updater, setUpdater] = useState(false);
  
//     const fetch = () => {
//       axios
//         .get("http://localhost:3000/api/get")
//         .then((data) => {
//           setProducts(data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     const updateProduct = (id, body) => {
//       console.log("update body", body);
//       console.log("update id", id);
  
//       axios.put(`http://localhost:3000/api/product/${id}`, body)
//         .then((data) => {
//           setUpdater(!updater);
//           console.log(data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };


//     const getCategory = () => {
//       axios
//         .get("http://localhost:3000/api/category/")
//         .then((data) => {
//           setCategory(data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };



//     useEffect(() => {
//       fetch();
//       getCategory();
//     }, [updater]);




//     const deleteProduct = (id) => {
//       console.log("id", id);
//       axios
//         .delete(`http://localhost:3000/api/delete/${id}`)
//         .then((data) => {
//           setUpdater(!updater);
//           console.log(data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     const addPost = (body) => {
//       console.log("addPost", body);
//       axios
//         .post("http://localhost:3000/api/post/", body)
//         .then((data) => {
//           setUpdater(!updater);
//           console.log(data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
  
//     return (
//       <div>

//         <Car  data={products}  />
//         {/* <AddPost addPost={addPost} category={category} /> */}
  
//         {/* <CarList
//           updateProduct={updateProduct}
//           category={category}
//           deleteProduct={deleteProduct}
//           data={products}
//         /> */}
//       </div>
//     );
//   };
// export default App
