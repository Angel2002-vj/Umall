import React from 'react'
import logo from '../assets/blacklogo.png'
import poweredlogo from '../assets/ere.png'
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="footer-section-info">
        <div className="logo-section">
              <div className="umall-logo"><img src={logo} className='umall--logo' alt="" /></div>
              <div className="social-media-links">
                <div className="social-media-icon"><i class="ri-instagram-line"></i></div>
                <div className="social-media-icon"><i class="ri-facebook-circle-line"></i></div>
                <div className="social-media-icon"><i class="ri-whatsapp-line"></i></div>
                <div className="social-media-icon"><i class="ri-twitter-line"></i></div>
              </div>
        </div>
        <div className="link-section">
             <div className="about-link">About</div>
             <div className="quik-link">Our Story</div>    
             <div className="quik-link">Our Mission</div> 
             <div className="quik-link">Our Vission</div>
        </div>
        <div className="contact-details-section">
            <div className='contact-us'>Contact us</div>
              <div className="contact">9562488888</div>
              <div className="contact">info.tigavision@gmail.com</div>
              <div className="contact">Kunnathuvalappil Plaza, Anakkalu Avinissery Thrissur 680306</div>
        </div>

      </div>
      <div className="footerlast-section">
         <div className="powered-by-section">
            <div className='powered-logo'><img src={poweredlogo} alt="" /></div>
            <div className='powered-by'>Powered by ERE Businesssolutions </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
