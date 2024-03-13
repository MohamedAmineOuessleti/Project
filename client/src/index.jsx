import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import CarList from './components/carList.jsx'
import Search from './components/Search.jsx'



const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  return (
    <div>
      <Search />
      <h1 className='tittle'>Post your car </h1>
      <CarList items={items} />
      {/* <ListItem items={items} /> */}
 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
