import React from 'react'


const CarList = (item) => {
    const element = data.map((e)=>{
        return <div> <h2>{data.name}</h2>
        <img style={{ width: 700, height: 300 }} src={data.img} alt="No content" />
        <p>{data.deiscription}</p>
        <p className='card-item-cat'>{data.category}</p>
        <p className='card-item-price'>{data.price}</p>
        <div className="product-card-buttons">
            <button>show details</button>
            <button >Delete Product</button>
            <button>buy now </button>
        </div>
        </div>
    })
    return (
        <div>
        <div className='products-list'>
            <div className="product-card">
    

                <h2>BMW</h2>
                <img style={{ width: 700, height: 300 }} src="https://i.gaw.to/vehicles/photos/40/19/401957-2020-bmw-x6.jpg?1024x640" alt="No content" />
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer...</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Category: computers</p>
                <div className="product-card-buttons">
                    <button>show details</button>
                    <button >Delete Product</button>
                    <button>buy now </button>
                </div>
            </div>
            <div className="product-card">
                <img style={{ width: 700, height: 300 }} src="https://cdn.motor1.com/images/mgl/40NNkq/s3/2025-mercedes-amg-glc63-s-e-performance.jpg" alt="No content" />
                <h2>Mercedes</h2>
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer...</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Category: computers</p>
                <div className="product-card-buttons">
                    <button>show details</button>
                    <button>Delete Product</button>
                    <button>buy now </button>
                </div>
            </div>
            <div  className="product-card">
                <img style={{ width: 700, height: 300 }} src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-porsche-911-gt3-2021-rt-hero-front.jpg?itok=_8XR4jdt" alt="No content" />
                <h2>porsche</h2>
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer...</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Category: computers</p>
                <div className="product-card-buttons">
                    <button>show details</button>
                    <button>Delete Product</button>
                    <button>buy now </button>
                </div>
            </div>
            <div className="product-card">
                <img style={{ width: 700, height: 300 }} src="https://i.gaw.to/content/photos/54/11/541178-jeep-annonce-les-recon-et-wagoneer-100-pc-electriques.jpeg" alt="No content" />
                <h2>jeep</h2>
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer...</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Category: computers</p>
                <div className="product-card-buttons">
                    <button>show details</button>
                    <button>Delete Product</button>
                    <button>buy now </button>
                </div>
            </div>
            <div className="product-card">
                <img style={{ width: 700, height: 300 }} src="https://www.motortrend.com/uploads/sites/11/2020/08/2021-Ram-1500-TRX-61.jpg" alt="No content" />
                <h2>RAM TRX </h2>
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer...</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Category: computers</p>
                <div className="product-card-buttons">
                    <button>show details</button>
                    <button>Delete Product</button>
                    <button>buy now </button>
                </div>
               
            </div>
        </div>
        </div>
    )
}
export default CarList
// import React from 'react'
// import ListItem from('./ListItem.jsx')

// function CarList(props) {
//   return (
//     <div>
//         {
//       props.data.map((element)=>(
//        <ListItem  car={element} key={element._id} fn={props.fn} update={props.update}/>
//         // <div key={element._id}>
//         // <h1>{element.name}</h1>
//         // <p>{element.description}</p>
//         // </div>
//       ))
//      }
//     </div>
//   )
// }

// export default CarList
