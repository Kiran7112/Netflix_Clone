import React from 'react'
import Logo from './logo';
import { NavLink,Link} from 'react-router-dom';
const  HomeTopHead= ({notify}) => {
    return (
     <div>
   
       <section className="top-head">   
     
         <div class="login">
        <div>
     <header>
      <img src="netflix_logo.svg" className='home-head-logo' />
     </header>
        </div>
     
                   <div className="lang">
                   <select name="lang" id="lang" >
                          <option value="eng">お English</option>
                          <option value="eng"> हिन्दी</option>
                   </select>
                   
                   
                    <button type="button" class="btn btn-danger"><Link to="/login"  style={{textDecoration:'none',color:'white'}}>Signin</Link></button>
                   <button type="button" class="btn btn-danger"><Link to="/contact"  style={{textDecoration:'none',color:'white'}}>Contact</Link></button>
                    </div>
                  
         </div>
         <div className='middle-container'>
          <p className='first'>Unlimited movies, TV shows and more</p>
          <p className='second h5'>Watch anywhere.Cancel anytime.</p><br />
          <p className='third h5'>Ready to watch? Enter your email to create or restart your membership.</p>
           <div>
            <input type="search"  placeholder='Email address' className='home-search'/>
              <Link to="/signup"> <button type="button" className='get' >Get Started ></button></Link>
             
           </div>
         </div>
      </section>
      <section className='second-section'>
          <div>
            <p className='first'>Enjoy on your TV</p>
            <p className='second'>Watch on smart TVs, PlayStation, Xbox,<br />
            Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className='second-con-image'>
          <video   autoPlay muted loop className="background-video">
              <source src="tvvideo.mp4" type="video/mp4"/>
          </video>
          </div>
      </section>
      <section className='third-section'>
          <div className='third-con-image'>
             <img src="stranger.jpg" alt="Stranger 1 Image" className='stranger1' />
  
                   <div class="third-con-image2">
                       <div>
                       <img src="stranger2.png" alt="" className='stranger2' />
                       </div>
                       <div>
                          <p>Stranger Things</p>
                          <p className='text-primary'>Downloading...</p>
                       </div>
                       <div className='download'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                         <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                         <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                        </svg>
  
                       </div>
                   </div>
          </div>
  
          <div>
            <p className='first'>Download your shows <br />to watch offline</p>
            <p className='second'>Save your favourites easily and always have <br /> something to watch.</p>
          </div>
      </section>
      <section className='fourth-section'>
          <div>
            <p className='first'>Watch everywhere</p>
            <p className='second'>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>
          </div>
          <div className='fourth-con-image'>
          <video   autoPlay muted loop className="background-video">
              <source src="tvvideo2.mp4" type="video/mp4"/>
          </video>
          </div>
      </section>
        <section className='fifth'>
          <div className='children'>
  
          </div>
          <div className='child-con-text'>
  
          </div>
        </section>
        <section className='third-section'>
          <div className='third-con-image'>
             <img src="children.png" alt="Stranger 1 Image" className='children' style={{width:'500px'}} />
  
          </div>
  
          <div>
            <p className='first'>Create profiles for kids</p>
            <p className='second'>Send children on adventures with their favourite <br /> characters in a space made just for them—free <br /> with your membership.</p>
          </div>
      </section>
      <section className='Questions'>
        <p className='h1'>Frequently Asked Questions</p><br />
      <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <span className='title'>What is Netflix?</span>
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <span class="content">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
  
  You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <span className='title'>How much  does Netflix cost?</span>
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse " aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body ">
          <span className='content'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</span>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <span className='title'>Where can I watch?</span>
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          
          <span className='content'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
  
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        <span className='title'>How do I cancel?</span>
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <span className='content'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        <span className='title'>What can i watch on Netflix?</span>
        </button>
      </h2>
      <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <span className='content'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
        <span className='title'>Is Netflix good for kids?</span>
        </button>
      </h2>
      <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <span className='content'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
  
  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
        </div>
      </div>
    </div>
  </div>
  <div className='middle-container'>
          
          <div>
               <input type="search"  placeholder='Email address' className='home-search'/>
               <button type="button" className='get'>Get Started ></button>
          </div>
        </div>
      </section>
        <section class="footer">
               <p className='que'>Questions?<u> Call 000-800-100-8343</u></p>
             <div className='foot-links'>
             <div className="links">
                <li><a href="">FAQ</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Media</a></li>
               </div>
               <div className="links">
                <li>
                  <a href="">Relations</a>
                </li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Ways to watch</a></li>
                <li><a href="">usage</a></li>
                
               </div>
               <div className="links">
                <li><a href="">Privacy</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">Corporate</a></li>
                <li><a href="">Contact Us</a></li>
                
               </div>
               <div className="links">
                <li><a href="">Speed</a></li>
                <li><a href="">Legal Notices</a></li>
                <li><a href="">Only on Netflix</a></li>
  
               </div>
             </div>
             <div className="lang last-lang" style={{margin:'30px 110px'}}>
                   <select name="lang" id="lang" style={{height:'35px'}} >
                          <option value="eng">お English</option>
                          <option value="eng"> हिन्दी</option>
                   </select>
                   
              </div>
              <p className='text-left text-muted net-ind' >Netflix India</p>
              
            
        </section>
        
     </div>
     
      
    );
  };

export default HomeTopHead;