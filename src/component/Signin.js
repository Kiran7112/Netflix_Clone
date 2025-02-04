import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { login } from '../Helper';
import "../styles/sign.css"; // Ensure this CSS file is imported

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [popup, setPopup] = useState({ visible: false, type: '', message: '' });
  const Navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Invalid email"),
    password: yup.string().matches(/\d/, "Password must contain numbers").min(4).max(20).required("Weak Password"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      login();
      Navigate("/main", { replace: true });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setPopup({ visible: true, type: 'error', message: 'Account does not exist.' });
      } else if (error.code === 'auth/wrong-password') {
        setPopup({ visible: true, type: 'error', message: 'Incorrect password.' });
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
        <form className='sign-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputs'>
            <div>
              <h2>Sign In</h2>
              <br />
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email address</label>
              {errors && <p className='text-danger'>{errors.email?.message}</p>}
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")} onChange={(e) => setPwd(e.target.value)} />
              <label htmlFor="floatingPassword">Password</label>
              {errors && <p className='text-danger'>{errors.password?.message}</p>}
            </div>

            <div>
              <button className='sign-btn'>
                Sign in
              </button>
            </div>
            <div>
              <Link to="/forgot" className='forgot-pwd'><p>Forgot Password?</p></Link>
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

export default Signin;