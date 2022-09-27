import React, { useState } from 'react'
import '../../src/styles/pages/Dashboard.css'
import Lilies from '../../src/Assets/Images/logo.png'
import Home from '../../src/Assets/Images/Dashboard-home.png'
import Profile from'../../src/Assets/Images/Profile.png'
import Order from'../../src/Assets/Images/Order.png'
import Cart from'../../src/Assets/Images/Cart.png'
import girl from'../../src/Assets/Images/girl-image.png'
import { Link } from 'react-router-dom'
import Modal from '../components/Modals/Modal'
import ModalOrder from '../../src/components/Modals/ModalOrder'
import Item from '../components/Item'
import Data from '../components/Data'
import ModalPay from '../components/Modals/ModalPay'


const Dashboard = props => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [see, setSee] = useState(false);




  const [num] = useState(0);


  var date = new Date();
  var hours = date.getHours();
  
  let message;
  
  if (hours < 12) {
    message = "Good Morning";
  } else if (hours < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }
  let user = JSON.parse(sessionStorage.getItem('data'));
 
  return (
    <div className='dashboard '>
      <div className='navigation'>
       <div className="logo-icon">
                <div><img src={Lilies} alt="logo" /> </div>
                <div><h6>Lilies</h6></div>
        </div>

          <div className='column'>
            <Link to='/dashboard'>
                <div className='row1'>
                    <div className='home-image'> <img src={Home} alt='home-icon' /></div>
                    <div><p to='/dashboard' className='to-dashboard'>Dashboard</p></div>
                  </div>
            </Link>
             

              <div className='row2' onClick={() => setSee(true) }>
                <div className='home-image'> <img src={Profile} alt='profile-icon' /></div>
                <div><button className='cart-btn'>Your Profile</button></div>
              </div>

              <div className='row3'>
                <div className='p-img' onClick={() => setView(true) }>
                   <div className='home-image'> <img src={Order} alt='profile-icon' /></div>
                   <div><button className='cart-btn'>Order</button></div>
                </div>
                <div className='counter'>
                  <p>0</p>
                </div>
              </div>

              <div className='row4'>
                <div className='p-img' onClick={() => setShow(true) }>
                    <div className='home-image'> <img src={Cart} alt='profile-icon' /></div>
                    <div><button className='cart-btn'>Cart</button></div>
                </div>
                <div className='counter-carts'>
                  <p className='o'>{num}</p>
                </div>
              </div>
              <div className='modals'>
                <Modal  onClose={() => setShow(false)} show={ show } />
                <ModalOrder onClose={() => setView(false)} view={ view } />
                <ModalPay onClose={() => setSee(false)} see={ see } />

              </div>
            </div>
      </div>
      <div className='menu'>
        <div className='containers1'>
          <div className='greeting-what'>
             <div> <p className='dashboard-greeting'>{ message } {`${user?.name}!`}</p> </div>
             <div> <p className='what-are-you-buying'>What delicious meal are you craving today?</p> </div>
          </div>

          <div><img src={girl} alt='girl' className='girl-image' /> </div>
        </div>

        <div className='food-menus'>
          {Data.productData.map((item, id)=>{
            return (
                 <Item  
              img={item.img} 
              title={item.title} 
              description={item.description}
              price={item.price} 
              item={item}
              key={id} />

            )

          })}
        </div>

      </div>

    </div>
  )
}

export default Dashboard