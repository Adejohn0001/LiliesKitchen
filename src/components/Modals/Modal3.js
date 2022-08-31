import React, { useState } from "react";
import balls from '../../Assets/Images/balls.png';
import "../../styles/Components/Modals/ModalImage.css";


const Modal3 = (props) => {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  if (!props.show) {
    return null;
  }


  return (
    <div className="modal2" onClick={props.onClose}>
      <div className="modal-content2 " onClick={e => e.stopPropagation()}>
        <div className="modal-body2">
          <div>
            <img src={balls} alt="icon" />
          </div>
          <div>
            <p className="p">Meat Balls</p>
          </div>
          <div>
            <p className="p2">
              Just have a single bite of this Black Forest pastry and it will
              all make a proper sense to you. The kick of cherry and rich
              chocolate of this super light, airy pastry will definitely make
              you feel "wow". The perfect combination of cherry cream and rich
              chocolate can provide the ultimate fulfillment to your dessert
              craving.
            </p>
          </div>

          <div className="price-minutes-pieces">
            <div className="price">
              <p>NGN 1000.00</p>
            </div>
            <div className="minutes">
              <p>10-20 Mins</p>
            </div>
            <div className="avail">
              <p>10 Pcs Avail</p>
            </div>
          </div>

          <div className="btns">
            <div className="in-de-btn">
              <button className="sub-btn" onClick={decrement}>
                -
              </button>
              <p className="p3">{count}</p>
              <button className="add-btn2" onClick={increment}>
                +
              </button>
            </div>

            <div>
              <button className="add-to-cart2">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="modal-footer2">
          <button onClick={props.onClose} className="button">
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
