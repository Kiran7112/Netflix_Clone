import React from 'react'

function Footer() {
  return (
   <>
   <section class="footer">
               <p>Questions?<u> Call 000-800-100-8343</u></p>
             <div className='foot-links'>
             <div className="links">
                <li><a href="">FAQ</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Media</a></li>
               </div>
               <div className="links">
                <li>
                  <a href="">Investor Relations</a>
                </li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Ways to Watch</a></li>
                <li><a href="">Terms of Use</a></li>
                
               </div>
               <div className="links">
                <li><a href="">Privacy</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">Information</a></li>
                <li><a href="">Contact Us</a></li>
                
               </div>
               <div className="links">
                <li><a href="">Speed Teszt</a></li>
                <li><a href="">Legal Notices</a></li>
                <li><a href="">Only on Netflix</a></li>
  
               </div>
             </div>
             <div className="lang" style={{margin:'30px 110px'}}>
                   <select name="lang" id="lang" style={{height:'35px'}} >
                          <option value="eng">お English</option>
                          <option value="eng"> हिन्दी</option>
                   </select>
              </div>
              <p className='text-left text-muted'>Netflix India</p>
            
        </section>
        
   </>
  )
}

export default Footer;