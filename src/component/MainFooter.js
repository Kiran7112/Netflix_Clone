import React from 'react';
import "../styles/mainfooter.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function MainFooter() {

  return (
   <>
    <section className='main-footer-con'>
   

      <div className='main-footer-links'>
        <div><li>Audio</li>
        <li> Relations</li>
        <li> Notices</li>
       </div>
        <div><li>Help</li>
        <li>Jobs</li>
        <li>Cookies</li></div>
        <div><li>Gifts</li>
      
        <li>Terms</li>
        <li>Corporate</li></div>
        <div><li>Media</li>
      
      <li>Privacy</li>
      <li>Contact Us</li>
     </div>
    
      <input type='text' className="service" placeholder='Service Code'/><br />
       
        <div class="card">
  <a class="socialContainer containerOne" href="https://github.com/Kiran7112" target='_blank' >
    <FaGithub className='socialIcon'/>
  </a>
  
  <a class="socialContainer containerTwo" href="https://www.linkedin.com/in/
maddireddy-kiran
" target='_blank'>
  <FaLinkedin className='socialIcon'/>
    </a>

    
  <a class="socialContainer containerThree" href="https://x.com/Kiran55626?t=xHCjvfLi5EBbUHnhL9LBxQ&s=09" target='_blank'>
  <FaXTwitter className='socialIcon'/>
   
  </a>
  
  
</div>             

        </div>

 
    </section>
    <p className='copy-rights'>Copyright © Kiran Maddireddy</p>
    
   </>
  )
}

export default MainFooter;