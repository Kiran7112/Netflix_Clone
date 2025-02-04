import React, { useEffect, useState } from 'react';
import "./Home.css";
import HomeTopHead from './component/HomeTopHead';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
  const [load, setLoad] = useState(true);
  const Navigate=useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      notify(); 
    }, 1000);
  }, []);

  return (
    <>
      <HomeTopHead notify={notify}/>
      <ToastContainer />
    </>
  );
};

const notify = () => toast("You are not logged in");
export default Home;
  

      
