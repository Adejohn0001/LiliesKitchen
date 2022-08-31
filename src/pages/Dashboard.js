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
import Menu from '../components/Menu'



const Dashboard = () => {
  const [show, setShow] = useState(false)

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
  let user = JSON.parse(sessionStorage.getItem('data'))
 
  return (
    <div className='dashboard '>
      <div className='navigation'>
      <div className="logo-icon">
                <div><img src={Lilies} alt="logo" /> </div>
                <div><h6>Lilies</h6></div>
            </div>

            <div className='column'>
              <div className='row1'>
                <div className='home-image'> <img src={Home} alt='home-icon' /></div>
                <div><Link to='/dashboard' className='to-dashboard'>Dashboard</Link></div>
              </div>

              <div className='row2'>
                <div className='home-image'> <img src={Profile} alt='profile-icon' /></div>
                <div><p>Your Profile</p></div>
              </div>

              <div className='row3'>
                <div className='p-img'>
                   <div className='home-image'> <img src={Order} alt='profile-icon' /></div>
                   <div><p>Order</p></div>
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
                  <p className='o'>0</p>
                </div>
              </div>
              <div className='modals'>
                <Modal  onClose={() => setShow(false)} show={ show } />
              </div>
            </div>
      </div>
      <div className='menu'>
        <div className='containers1'>
          <div><p className='dashboard-greeting'>{ message } {`${user?.name}!`}</p>
             <p className='what-are-you-buying'>What delicious meal are you craving today?</p>
          </div>

          <div><img src={girl} alt='girl' className='girl-image' /> </div>
        </div>

        <div className='menus'>
          <Menu />
        </div>

      </div>

    </div>
  )
}

export default Dashboard