import React from 'react'
import '../../styles/Components/Modals/ModalCart.css'

const Modal = props => {

    if (!props.show) {
        return null
    }
  return (
    <div className='modal' onClick={props.onClose} >
        <div className='modal-content ' onClick={e => e.stopPropagation()}>
            <div className='modal-header'>
                <h4 className='modal-title'>Modal Title</h4>
            </div>
            <div className='modal-body'>
                <p> This is the modal content </p>
            </div>
            <div className='modal-footer'>
                <button onClick={props.onClose} className='button'> Close </button>
            </div>
        </div>
    </div>
  )
}

export default Modal