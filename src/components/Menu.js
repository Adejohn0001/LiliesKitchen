import React, { useState } from 'react'
import '../../src/styles/Components/Menu.css'
import burgers from '../../src/Assets/Images/burger.png'
import rice from '../../src/Assets/Images/rice.png'
import balls from '../../src/Assets/Images/balls.png'
import sweet from '../../src/Assets/Images/sweet.png'
import bread from '../../src/Assets/Images/bread.png'
import cakes from '../../src/Assets/Images/Cakes.png';
import ModalImage from './Modals/ModalImage'
import Modal2 from './Modals/Modal2'
import Modal3 from './Modals/Modal3'
import Modal4 from './Modals/Modal4'
import Modal5 from './Modals/Modal5'
import Modal6 from './Modals/Modal6'

const Menu = () => {
   const [show, setShow] = useState(false);
   const [appear, setAppear] = useState(false);
   const [display, setDisplay] = useState(false);
   const [see, setSee] = useState(false);
   const [view, setView] = useState(false);
   const [reveal, setReveal] = useState(false);




  return (
    <div className='menus'>

        <div className='menu-list1'>
          <div className='details'  onClick={() => setShow(true) } >
             <div><img src={burgers} alt='burger-meat pix' /> </div>
             <div><h6>Cheeseburger</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <ModalImage  onClose={() => setShow(false)} show={ show }/>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
           
       </div>

        <div className='menu-list1'>
          <div className='details' onClick={() => setAppear(true) }>
             <div><img src={rice} alt='burger-meat pix' /> </div>
             <div><h6>Stir Fry Pasta</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <div className='price-cart'>
               <Modal2 onClose={() => setAppear(false)} show={ appear } />
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details' onClick={() => setDisplay(true) } >
             <div><img src={balls} alt='burger-meat pix' /> </div>
             <div><h6>Meat Balls</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <Modal3 onClose={() => setDisplay(false)} show={ display }/>
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details' onClick={() => setSee(true) }>
             <div><img src={sweet} alt='burger-meat pix' /> </div>
             <div><h6>Wheatsheaf Old Glossop</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <Modal4 onClose={() => setSee(false)} show={ see } />
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details' onClick={() => setView(true) }>
             <div><img src={bread} alt='burger-meat pix' /> </div>
             <div><h6>Blueberry Toasts</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <Modal5 onClose={() => setView(false)} show={ view } />
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>

       <div className='menu-list1'>
          <div className='details' onClick={() => setReveal(true) }>
             <div><img src={cakes} alt='burger-meat pix' /> </div>
             <div><h6>Mohrensuppe Soup</h6></div>
             <div><p className='story'>The in-house pasta and chicken by chef Moose</p></div>
             <Modal6 onClose={() => setReveal(false)} show={ reveal } />
             <div className='price-cart'>
               <div><p className='price'>N 1,000.00</p></div>
               <div><p className='add-to-cart'>Add to cart</p></div>
             </div>
          </div>
       </div>


    </div>
    
  )
}

export default Menu