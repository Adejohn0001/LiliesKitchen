import React from 'react'
import { Link } from'react-router-dom'

import styled from 'styled-components'

const UlStyled = styled.ul`
display: flex;
justify-content: space-between;
li{
  margin-right: 50px;
  margin-top: 15px;
}
.link{
  color: white;
}
@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color:  #00302e;
  justify-content: center;
  place-items: center;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  width: 100%;
  top: 0;
  right: 0;
  padding: 3.5rem;
  transition: transform 0.3s ease-in-out;
  margin-top:5rem;

li {
  padding: 20px 30px 20px 0px;
} 
li{
  margin-right: 0px;
  margin-top: -20px;

.link{
  color: white;
  font-size: 17px;
}
a{
  color: aliceblue;
  font-size:12px;
}
}
`

const Nav = ({ open }) => {
  return (
    <div>
        <div className="links">
              <UlStyled open={open}>
                <li> <Link to="/" className='link'> Home  </Link> </li>
                <li> <Link to="/login" className='link'>  Login </Link> </li>
                <Link to="/signup"><button>SignUp</button> </Link>
             </UlStyled> 

        </div>
    </div>
  )
}

export default Nav