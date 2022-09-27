import React from 'react'
import '../../src/styles/Components/Menu.css';
import { useCart } from 'react-use-cart';

const Item = (props) => {
  const { addItem } = useCart();

  
  return (
    <div className='list-item'>
        <div className='menu-list1'>
          <div className='details'>
          <img src={props.img} alt='menu' />
            <div>
                <h6>{props.title}</h6>
                <p className='story'> {props.description} </p>
                <div className='price-cart'>
                  <p className='price'>N {props.price} </p>
                  <button onClick={() => addItem(props.item)  } className='add-to-cart'> Add to Cart</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Item