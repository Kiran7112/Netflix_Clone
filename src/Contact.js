import React, { useState } from 'react'
import "./Contact.css";
import Logo from "../src/component/logo";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {auth} from "../src/config/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../src/config/firebase';
const Contact=()=> {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [message,setmessage]=useState("");
   const addData=()=>{
    const ref=collection(db,"Feedback");
    addDoc(ref,{
      name,
      email,
      message,
    })
    document.querySelector('.sucess').style.display="block";
   }
  return (
    <>
    <header>
      <img src="netflix_logo.svg" className='netflix_con_logo'/>
    </header>
    <div className="contact-form">
            <div className='contact-content'>
            <p className='text-center lead display-5 '>Contact</p>
      <p className='text-center'>Interested in hiring me for your Company.You can fill in the contact form below or send me an email to <br/><a href=""><span>maddireddykirankumar7112@gmail.com</span></a></p>
      <p className='text-center text-muted'>Want to get connected? Follow me on the social channels below.</p>
            <div className='cont-social-icons-links'>
              <li><FaGithub/></li>
              <li><FaLinkedin/></li>
              <li><FaXTwitter/></li>
            </div>
            </div>
       
    <form action="
    https://formspree.io/f/xleqnzor"   method="POST" onSubmit={addData}>
     <div class="form-group">
  <input type="text" class="form-control" id="name" name="name" placeholder='Enter your name' onChange={e=>setname(e.target.value)}/>
  <input type="email" class="form-control " id="email" name="email" placeholder='Enter your email'  onChange={e=>setemail(e.target.value)}/>
</div>
<div class="form-group">
<textarea class="form-control" rows="5" id="message" name="message" placeholder='Leave your feedback here'  onChange={e=>setmessage(e.target.value)}></textarea>
</div>
<div class="form-group">
  <button type='submit' id="send">Send</button>
</div>
<div class="form-group">
<span className='sucess' style={{display:'none'}}>Thanks For Your Feedback</span>
</div>

    </form>
  
    </div>
    <p className='text-center'>Copyright © <span>Kiran Maddireddy</span></p>
    
    </>
  )
}

export default Contact