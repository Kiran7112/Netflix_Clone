import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/sign.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { login } from '../Helper';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [popup, setPopup] = useState({ visible: false, type: '', message: '' });
  const Navigate = useNavigate();

  // Password validation schema
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[!@#$%^&*]/, "Password must contain at least one special character (!@#$%^&*)")
      .required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
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
  };

  const createAccount = async () => {
    try {
      const newAccount = await createUserWithEmailAndPassword(auth, email, pwd);
      await sendEmailVerification(newAccount.user);
      setPopup({ visible: true, type: 'success', message: 'Account created successfully!' });
      setTimeout(() => {
        setPopup({ visible: false, type: '', message: '' });
        Navigate("/login");
      }, 2000); // Close pop-up after 2 seconds and navigate to login
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setPopup({ visible: true, type: 'error', message: 'Account already exists.' });
      } else {
        setPopup({ visible: true, type: 'error', message: error.message });
      }
      setTimeout(() => {
        setPopup({ visible: false, type: '', message: '' });
      }, 2000); // Close pop-up after 2 seconds
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
        <form onSubmit={handleSubmit(onSubmit)} className='sign-form'>
          <div className='inputs'>
            <div>
              <h2>Sign up</h2>
              <br />
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email address</label>
              {errors.email && <p className='text-danger'>{errors.email.message}</p>}
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")} onChange={(e) => setPwd(e.target.value)} />
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
            </div>

            <div>
              <button className='sign-btn' type='button' onClick={createAccount}>
                Create an account
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

      {/* Pop-Up Message */}
      {popup.visible && (
        <div className="popup-overlay">
          <div className={`popup-content ${popup.type}`}>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ visible: false, type: '', message: '' })}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;