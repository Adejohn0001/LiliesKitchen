import React from 'react'
import styled from 'styled-components'
import '../../styles/Components/Modals/Modal.css'

const StyleModalpay = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
position: fixed;
top: 0;
background-color: rgba(0, 0, 0, 0.1);
transition: all 0.5s ease-in-out;

.modal-content {
    width: 500px;
    background-color: #fff;
    height: 100vh;
  }

  .modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-title {
  margin: 0;
}

.modal-body {
  padding: 10px 32px;
  width: 100%;
  margin-top: 5rem;
}

.your-cart {
  margin-top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  color: #00302e;
}

.close-button {
  margin-left: 0px;
  box-shadow: 3px 3px 8px #00302e;
  width: 6%;
  display: none;
}

.button {
  font-size: 20px;
  margin-left: px;
  padding: 10px;
  color: #00302e;
  background-color: #fff;
  border: none;
}

.cardnumber {
  width: 410px;
  height: 51px;
  background: rgba(255, 255, 255, 0.83);
  border: 1px solid rgba(251, 221, 187, 0.51);
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  color: rgba(0, 48, 46, 0.53);
  padding-left: 20px;
  margin-top: 2rem;
}

.checkout-btn {
  margin-top: 5rem;
  width: 410px;
  height: 51px;
  border: none;
  background: #00302e;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px;
  text-align: center;
  color: #f3c294;
}

@media (max-width: 600px) {

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
const ModalPay = props => {


    if (!props.see) {
        return null
    }

  return (
    <StyleModalpay className='modal' onClick={props.onClose} >
    <div className='modal-content ' onClick={e => e.stopPropagation()}>
    <div className='close-button'>
      <button onClick={props.onClose} className="button">
        {" "}
        X{" "}
      </button>
    </div>
        <div className='modal-body'>
            <div> <p className='your-cart'>Checkout</p> </div>
            <div>
                <input type='text' name='cardnumber' className='cardnumber' placeholder='Card Number' />
            </div>
            <div>
                <input type='date' name='cardnumber' className='cardnumber' placeholder='Exp Date' />
            </div>
            <div>
                <input type='text' name='cardnumber' className='cardnumber' placeholder='CVV/CVV2' />
            </div>
            <div>
                <input type='password' name='cardnumber' className='cardnumber' placeholder='Card Pin' />
            </div>
            <div>
               <button className='checkout-btn'> Make Payment</button>
            </div>
        </div>
        <div className='modal-footer'>
        </div>
    </div>
</StyleModalpay>
  )
}

export default ModalPay