import React,{useEffect,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../styles/sign.css";
import Footer from "./Footer";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from "react-icons/fc";
import {auth,provider} from "../config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup,sendEmailVerification} from "firebase/auth";
import { login } from '../Helper';
const Signup = () => {
  const [email,setemail]=useState("");
  const [pwd,setpwd]=useState("");
  const Navigate=useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Invalid email"),
    password: yup.string().matches(/\d/, "Password must contain numbers").min(4).max(20).required("Weak Password"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const signupWithGoogle = async () => {
    try {
      const newUser = await signInWithPopup(auth, provider);
      login();
      Navigate("/main", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  }
  const createAccount=async ()=>{
          try{
            const newAccount= await createUserWithEmailAndPassword(auth,email,pwd);
            await  sendEmailVerification(newAccount.user);
            Navigate("/login");
            console.log(auth);
          }catch(error)
          {
            console.log(error.message);
          }
  }
 
  return (
    <>
      <section className='main-con'>
        <div className="background-image"></div> 
        <div className="overlay"></div> 
        <header>
          <img src="netflix_logo.svg" alt="not_found" className='login-net-logo' />
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className='sign-form'>
          <div className='inputs' >
            <div>
              <h2>Sign up</h2>
              <br />
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")}  onChange={(e)=>{setemail(e.target.value)}}/>
              <label htmlFor="floatingInput">Email address</label>
              {errors && <p className='text-danger'>{errors.email?.message}</p>}
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")} onChange={(e)=>{setpwd(e.target.value)}}/>
              <label htmlFor="floatingPassword">Password</label>
              {errors && <p className='text-danger'>{errors.password?.message}</p>}
            
            </div>
            
            <div>
              <button className='sign-btn' type='button' onClick={createAccount}>
                Create a account
              </button>
              <p className='text-center text-white h4'> or</p>
              <button type='button ' className='google-signup-btn' onClick={signupWithGoogle}>< FcGoogle className='google-signup-icon' />Signup with Google</button>
              <br />
           
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
              <p>Existing User? <Link to="/login" className='link'>Login now.</Link></p>
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
export default Signup;