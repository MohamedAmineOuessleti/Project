
import React from 'react'
import OneCar from './OneCar.jsx'
function CarListt(props) {
  return (
    <div>
        {
      props.data.map((element)=>(
       <OneCar  car={element} key={element._id} fn={props.fn} update={props.update}/>
        // <div key={element._id}>
        // <h1>{element.name}</h1>
        // <p>{element.description}</p>
        // </div>
      ))
     }
    </div>
  )
}

export default CarListt