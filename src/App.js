import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import Dashboard from './pages/Dashboard';
import { CartProvider } from 'react-use-cart';



function App() {

  return (
    < CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
