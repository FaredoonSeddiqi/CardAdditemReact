import React,{useState} from 'react'


function Card({ input, handleAddTocart }) {
 
  return (
    <div className='grid containercard1'>
      {
        input && input.length > 0 && input.map((item, i) => {
          const { name, image,price } = item;
          return (
            <div className="card cardContainer">
              <div className="img-area">
                <img src={image} alt='img' />
              </div>
                <div class="info">
                  <p>{name}</p>
                  <p class="price">${price}</p>
                </div>
                <button className='btn btn-primary'onClick={()=>handleAddTocart(item)}>Addto Card</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card


