import React from 'react'
import '../../styles/Components/Modals/ModalCart.css'
import '../../styles/Components/Modals/Modal.css'
import { useCart } from 'react-use-cart';

const ModalOrder = props => {

    const {
        items,
        removeItem,
     } = useCart();

    if (!props.view) {
        return null
    }

  return (
    <div className='modal' onClick={props.onClose} >
        <div className='modal-content ' onClick={e => e.stopPropagation()}>
            <div className='modal-body'>
                <p className='your-cart'>Your Cart</p>

                <table>
                    <th className='item'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub-total</th>
                    <tbody>
                     {items.map((item, id)=>{
                        return (
                            <tr key={id}>
                            <div className='items'>
                                <div>
                                <td>
                                <img src={item.img} alt='menu' className='cart-img'/>
                            </td>
                                </div>
                                <div className='title-rm'>
                                <td className='title'>{item.title}</td>
                                <button
                                  className='rm-btn'
                                  onClick={() => removeItem(item.id)}
                                >Remove</button>
                                </div>

                            </div>

                            
                            <td className='qty'> {item.quantity} </td>
                            
                            <td className='price'>N {item.price}</td>
                            <td className='price'>N {item.price * item.quantity}</td>
                        </tr>
                        )
                    })}
                   </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ModalOrder