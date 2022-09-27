import React, { useState } from 'react'
import '../../styles/Components/Modals/ModalCart.css'
import '../../styles/Components/Modals/Modal.css'
import { useCart } from 'react-use-cart';
import ModalPay from '../../components/Modals/ModalPay';
import styled from 'styled-components';

const StyledModal = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
position: fixed;
top: 0;
background-color: rgba(0, 0, 0, 0.1);
transition: all 0.5s ease-in-out;

.modal-content {
  width: 660px;
  background-color: #fff;
  height: 100vh;
}

th {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 33px;
  color: rgba(0, 0, 0, 0.69);
  margin-top: 113px;
}
.your-cart {
  margin-top: 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 33px;
  color: #00302e;
}
.cart-img {
  width: 80px;
  height: 80px;
  left: 739px;
  top: 170px;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  color: #00302e;
}
.rm-btn {
  width: 50px;
  height: 21px;
  left: 824px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #c92c33;
  background-color: #ffffff;
  border: none;
}
.title-rm {
    margin-top: 0.7rem;
}
.item {
  width: 40%;
}
.items {
  display: flex;
}
.qty,
.price {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 33px;
  color: #00302e;
}
.total {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 33px;
  color: rgba(0, 0, 0, 0.69);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 2.5rem;
}
.total span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 33px;
  color: #00302e;
}
.checkout-btn {
  width: 479px;
  height: 60px;
  left: 821px;
  top: 778px;
  background: #00302e;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px;
  text-align: center;
  color: #f3c294;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
}

.close-button {
  margin-left: 0px;
  box-shadow: 3px 3px 8px #00302e;
  width: 6%;
  display: none;
}



@media (max-width: 750px) {

  .modal-body {
    padding: 10px 32px;
    width: 100%;
    margin-top: 2rem;
  }

  .close-button {
    margin-left: 0px;
    box-shadow: 3px 3px 8px #00302e;
    width: 6%;
    display: block;
  }
}

`
const Modal = props => {

  const [see, setSee] = useState(false)

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
    <StyledModal className='modal' onClick={props.onClose} >

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
            <div className='modal-footer' >
                <button className='checkout-btn' onClick={() => setSee(true) } > Checkout</button>
            </div>
            <div className='modals'>
               <ModalPay  onClose={() => setSee(false)} see={ see } />
            </div>
        </div>
    </StyledModal>
  )
}

export default Modal