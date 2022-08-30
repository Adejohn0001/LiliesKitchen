import React from 'react'


const Card = (props) => {
  
  return (
    <div className='cards'>
        {props.details.map( (value, index)=>(
        <div className='card' key={index}>
            <div className='card-image'>
                <img src={value.img} alt='menus' />
            </div>

            <div>
                <p className='card-title'>{value.title}</p>
                <p className='description'>{value.description}</p>
                <div className='price-add-btn'>
                   <p className='price-tag'>{value.price}</p>
                   <button className='add-btn'>Add to cart</button>
                </div>

            </div>
        </div>
        ))}
    </div>
  )
}

export default Card