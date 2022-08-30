import React, { useState } from 'react'
import '../../src/styles/pages/Login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    })
  }

  console.log(loginDetails);

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = JSON.parse(sessionStorage.getItem('data'))

    if (loginDetails?.email === user?.email && loginDetails?.password === user?.password) {
      toast.success("Login Successful");
      setInterval(() => {
        window.location='/dashboard'
      }, 3000);

    }else {
      toast.error("Wrong email or Passowrd")
    }
  }



  return (
    <main className='login-main'>
      <ToastContainer />
      <div className='left-flex'></div>


      <div className='right-flex'>
        <div><h6 className='welcome'>Welcome Back!</h6></div>
        
        <form className='input' onSubmit={handleSubmit}>
          <div className='email'> <input type='email' onChange={handleChange} name='email' placeholder="Your Email address" />
          </div>
          <div> <input type='password' onChange={handleChange} name='password' placeholder="Your Password" className='password' />
          </div>
          <div><button type="submit"> LOGIN </button></div>
        </form>


        <div className='login-container3'>
          <div><Link to="/signup" className='login-link'> <p>Create an account</p> </Link></div>
          <div><Link to="/forgot-password" className='login-link'> <p>Forgot Passoword</p> </Link></div>
        </div>

      </div>
    </main>
  )
}

export default Login