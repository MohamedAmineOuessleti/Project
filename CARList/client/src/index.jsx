import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import CarListt from "./components/CarList.jsx"
import Add from "./components/Add.jsx"
const App = () => {
const [cars,setCars]=useState([])
const [updater,setUpdater]=useState(false)



const fetch =()=>{
  axios.get("http://localhost:3000/api/car/")
  .then((response)=>setCars(response.data))
  .catch((error)=>console.error(error))
}

useEffect(()=>{
  fetch()
},[updater])

const addCar=(obj)=>{
  axios.post("http://localhost:3000/api/car/",obj)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}
const deleteCar=(id)=>{
  console.log(id,'idd')
  axios.delete(`http://localhost:3000/api/car/${id}`)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}

const updateCar=(id,obj)=>{
  axios.put(`http://localhost:3000/api/car/${id}`,obj)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}


  return (
    <div>
      <h1 className='tittle'>Car List</h1>
      <Add func={addCar}/>
      <CarListt data={cars} fn={deleteCar} update={updateCar}/>
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