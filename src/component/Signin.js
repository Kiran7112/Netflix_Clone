import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { login } from '../Helper';

const Signin = () => {
  const [email, setEmail] = useState("");
const [pwd, setPwd] = useState("");
  const Navigate=useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const schema = yup.object().shape({
    email: yup.string().email().required("Invalid email"),
    password: yup.string().matches(/\d/, "Password must contain numbers").min(4).max(20).required("Weak Password"),
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
        login();
        Navigate("/main" ,{replace:true});
    } catch (error) { 
      console.log(error.message);
    }
  };

  return (
    <>
      <section className='main-con'>
        <div className="background-image"></div> 
        <div className="overlay"></div> 
        <header>
          <img src="netflix_logo.svg" alt="not_found" className='login-net-logo' />
        </header>
        <form className='sign-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputs' >
            <div>
              <h2>Sign In</h2>
              <br />
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="floatingInput" >Email address</label>
              {errors && <p className='text-danger'>{errors.email?.message}</p>}
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")} onChange={(e)=>setPwd(e.target.value)} />
              <label htmlFor="floatingPassword">Password</label>
            
            </div>
            
            <div>
              <button className='sign-btn' >
                Sign in
              </button>
            </div>
            <div>
            <Link to="/forgot" className='forgot-pwd' ><p >Forgot Password?</p></Link>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <div className='captcha'>
            <div>
              <p>New to Netflix? <Link to="/signup" className='link'>Sign up now.</Link></p>
            </div>
            <div>
              <p className='text-muted  text-captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link>Learn more.</Link></p>
            </div>
          </div>
        </form>
      
      </section>
    </>
  );
}
export default Signin;