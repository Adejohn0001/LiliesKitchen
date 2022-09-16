import React from 'react'
import { useCart } from 'react-use-cart';

const ModalPay = props => {
    const {
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
     } = useCart();


    if (!props.show) {
        return null
    }

  return (
    <div className='modal' onClick={props.onClose} >
    <div className='modal-content ' onClick={e => e.stopPropagation()}>
    <div className='close-button'>
      <button onClick={props.onClose} className="button">
        {" "}
        X{" "}
      </button>
    </div>
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
                        <td>
                            <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >-</button>
                            <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >+</button>
                        </td>
                    </tr>
                    )
                })}
               </tbody>
            </table>
        </div>

        <div>
            <p className='total'>Total: <span>N {cartTotal}</span></p>
        </div>
        <div className='modal-footer'>
            <button className='checkout-btn'> Checkout</button>
        </div>
    </div>
</div>
  )
}

export default ModalPay