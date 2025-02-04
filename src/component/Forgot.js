import React, { useState } from 'react';
import "../styles/forgot.css";
import Logo from './logo';
import { auth } from '../config/firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth'; 
import { Link } from 'react-router-dom';

function Forgot() {
  const [email, setEmail] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault(); 
    try {
      await sendPasswordResetEmail(auth, email); 
      alert("Check your email for instructions on how to reset your password.");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(auth);
  return (
    <div className='forgot-pwd-con'>
      <header>
        <img src="netflix_logo.svg" alt="" className='forgot-logo' />
      </header>
      <Link to="/login"><h3>Sign In</h3></Link>
      <div>
        <form className='forgot-form' onSubmit={resetPassword}> {/* Move onSubmit to form */}
          <p className='text-center m-4 h2'>Forgot Email/Password</p>
          <p className='text-center m-2'>How would you like to reset your password?</p>
          <p className='text-left m-4 sending-text'>We will send you an email with instructions on how to reset your password.</p>
          <div className="m-2">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='text-center'>
            <button type="submit" className="btn btn-primary  forgot-sub" >Email Me</button>
          </div>
          <a href="#" className='text-center hoverEffect m-1'><p>I can't remember my email address or phone number.</p></a>
          <p className='text-center text-muted m-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
