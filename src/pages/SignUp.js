import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Sign-up.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const SignUp = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('data', JSON.stringify(form))

    toast.success("Sign Up Successful")

    setInterval(() => {
      window.location = '/login'
    }, 3000);
  }

  return (
    <main className='signup-main'>
      <ToastContainer />
    <div className='signup-left-flex'></div>


    <div className='signup-right-flex'>
      <div><h6 className='welcome-to-lilies'>Welcome to Lilies!</h6></div>
      
      <form className='inputs' onSubmit={handleSubmit}>
        <div> <input type='text' name='name' placeholder="Your First Name" className='first-name' onChange={handleChange} />
        </div>
        <div className='email'> <input type='email' name='email' placeholder="Your Email address"  onChange={handleChange} />
        </div>
        <div> <input type='password' name='password' placeholder="Your Password" className='password'  onChange={handleChange} />
        </div>
        <div> <button type='submit'>SIGN UP</button></div>
      </form>


      <div className='signup-container3'>
        <div> <p>Already have an account. <Link to="/login" className='signup-link'> <span> LOGIN </span> </Link></p> </div>
      </div>

    </div>
  </main>
  )
}

export default SignUp